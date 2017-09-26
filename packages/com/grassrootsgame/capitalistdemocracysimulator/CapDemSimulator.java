/* File: CapDemSimulator.java
 * Author: Miko Dimov
 * Date: 10/22/2016
 * Purpose: This implements a simulation of a capitalist democratic system,
 * for the game Grass Roots.
 */

package com.grassrootsgame.capitalistdemocracysimulator;

import java.util.ArrayList;
import java.io.Writer;
import java.io.File;
import java.util.Random;
import java.util.*;
import java.text.DecimalFormat;
import java.math.*;

public class CapDemSimulator {
    
 /*  ---------------------------------------------------------------------
  *  ------------------------- INTITIALIZATION METHODS ------------------------
  *  ---------------------------------------------------------------------
  */
    
    public static Debugger d = new Debugger();
    
    public String[] skillTypes = {"Science", "Communication", "Art", "Work", "War"};  
    public String[] buildingTypes = {"Farm", "Lumber Camp", "Barracks", "School", "Market"};
                                  //the term "Lumber Camp" is lifted directly from Age of Empires 2... might want a different name.
    public int numberOfSkillTypes = skillTypes.length;
    public int numberOfBuildingTypes = buildingTypes.length;
    
    public int individualNameLength = 3;
     
    public Map worldMap = new Map();
    public int defaultMapDimension = 50;
    
    public int populationSize = 50;
    public Group population;
    
    public int buildingNumber = 10;
    public int resourceNumber = 12;
    
    public double generateSkillLevel() {
      // copied significantly from http://stackoverflow.com/questions/153724/how-to-round-a-number-to-n-decimal-places-in-java
          DecimalFormat df = new DecimalFormat("#.###");
          df.setRoundingMode(RoundingMode.CEILING);
          
          double randomNumber = generateRandomDouble();
          double skillLevel = Double.parseDouble(df.format(randomNumber));
          
          return skillLevel;
    }
    
    public String[] generateSkillUnit(String skillName) {
        
        double skillLevel = generateSkillLevel();
        Skill skill = new Skill (skillName, skillLevel);
        
        skill.skillUnit = new String[2];
        skill.skillUnit[0] = skill.skillName;
        skill.skillUnit[1] = Double.toString(skill.skillLevel);
        
        // d.db(skill.skillUnit);
        return skill.skillUnit;
    }
    
    public String[][] generateSkillSet() {
        String[][] skillSet = new String[numberOfSkillTypes][];
        
        for (int i = 0; i< numberOfSkillTypes; i++) {
            String[] skillUnit = generateSkillUnit(skillTypes[i]);
            skillSet[i] = skillUnit;
        }      
        return skillSet;
    }
    
    public int[] generateRandomCoordinates() {
        int[] coordinates = new int[2];
        
        int x = generateRandomInt(0, worldMap.dimension);
        int y = generateRandomInt(0, worldMap.dimension);
        
        // d.db("newly generated coordinates: x = " + x + ", y = " + y);
        // System.out.println();
        
        coordinates[0] = x;
        coordinates[1] = y;
        
        if (worldMap.space[x][y] != "___") {
            // d.db("central collision");
            coordinates = generateRandomCoordinates();
        }
        return coordinates;
    }
    
    public void generateMap() {
        worldMap.dimension = defaultMapDimension;
        String[][] newMap = new String[worldMap.dimension][worldMap.dimension];
        for (int i = 0; i < worldMap.dimension; i++){
            for (int j = 0; j < worldMap.dimension; j++){
                newMap[i][j] = "___";
            }
        }
        // d.db(newMap);
        worldMap.space = newMap;
    }
    
    public void updateMap(String id, int[] coordinates) {
        int x = coordinates[0];
        int y = coordinates[1];  
        worldMap.space[x][y] = id;
        // d.db("map udpated with " + id + " at " + x + ", " + y);
    }
    
    public boolean verifyCoordinatesFree(int x, int y) {
        
        boolean coordinatesFree;
        
        if (((x <= 0)||(y <= 0)) || ((x >= worldMap.dimension - 1)||(y >= worldMap.dimension - 1)) || (worldMap.space[x][y] != "___")) {
              // d.db("these coordinates are occupied");
            return coordinatesFree = false;
        }
       
        return coordinatesFree = true;
        
    }
        
    public boolean verifySurroundingsFree(int[] coordinates) {
        int x = coordinates[0];
        int y = coordinates[1];
        
        boolean surroundingsFree;
        
        // d.db("................................................................structure.coordinates = " + x + ", " + y);
        for (int i = x - 1; i <= x + 1; i++) {                     // if surrounding slots are filled or off the map, re-generate coordinates.
            for (int j = y - 1; j <= y + 1; j++) {
                if (((i <= 0)||(j <= 0)) || ((i >= worldMap.dimension - 1)||(j >= worldMap.dimension - 1)) || (worldMap.space[i][j] != "___")) {
                    // d.db("structure surroundings collision");
                    return surroundingsFree = false;
                }
            }
        }
        return surroundingsFree = true;
    }
    
    public void generateBuilding() {
        // System.out.println();
        // d.db("new building started");
        Building structure = new Building();
        
        structure.coordinates = generateRandomCoordinates();
        boolean surroundingsFree = verifySurroundingsFree(structure.coordinates);
        
        if (surroundingsFree == true) {
        
            int x = structure.coordinates[0];
            int y = structure.coordinates[1];
        
            for (int k = x - 1; k <= x + 1; k++) {
                // System.out.println("k = " + k + ", x = " + x);
                for (int l = y - 1; l <= y + 1; l++) {
                    // System.out.println("l = " + l + ", y = " + y);
                    int[] toBeCovered = {k, l};
                    // d.db("to be covered = " + Arrays.toString(toBeCovered)); 
                    updateMap("###", toBeCovered);
                }
            }
        }
        else {
            generateBuilding();
        }
    }
    
    public void generateResource() {
        
        Resource patch = new Resource();
        
        patch.coordinates = generateRandomCoordinates();
        boolean surroundingsFree = verifySurroundingsFree(patch.coordinates);
        
        if (surroundingsFree == true) {
        
            int x = patch.coordinates[0];
            int y = patch.coordinates[1];
        
            for (int k = x - 1; k <= x + 1; k++) {
                // System.out.println("k = " + k + ", x = " + x);
                for (int l = y - 1; l <= y + 1; l++) {
                    // System.out.println("l = " + l + ", y = " + y);
                    int[] toBeCovered = {k, l};
                    // d.db("to be covered = " + Arrays.toString(toBeCovered)); 
                    updateMap("^|^", toBeCovered);
                }
            }
        }
        else {
            generateResource();
        }
    }
    
    public String generateID() {
          String capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          String smallCharacters = "abcdefghijklmnopqrstuvwxyz";
          String vowels = "aeiouy";
          Random rn = new Random();
          int idEndOfNameLength = individualNameLength - 2;
          
          String id = generateString(rn, capitals, 1);
          id += generateString(rn, vowels, 1);
          id += generateString(rn, smallCharacters, idEndOfNameLength);
          
          // d.db("about to check this new id, " + id + ", is already in dictionary");
          if (population.database.member(id)) {
              // d.db("first attempt: " + id);
              id = generateID();
              // d.db("second attempt: " + id);
          }
          else {
              // d.db(id + " is not a member");
          }
          
          return id;
      }
    
    public Individual generateIndividual() {
        
        Individual person = new Individual();
        person.id = generateID();
        person.skillSet = generateSkillSet();
        person.coordinates = generateRandomCoordinates();
        person.moving = false;
        
        person.info = new String[3];
        person.info[0] = String.valueOf(person.moving);
        person.info[1] = Arrays.toString(person.coordinates); 
        person.info[2] = Arrays.deepToString(person.skillSet);
            
        
        // d.db(person.info);
        updatePopulation(person);
        
        updateMap(person.id, person.coordinates);                // update map by placing new person's id at the corresponding coordinates
        
        // d.db(person);
        return person;
    }
    
    public void generatePopulation() {
        Group pop = new Group(populationSize);
        population = pop;
        Dictionary popDatabase = new Dictionary(); 
        population.database = popDatabase;
    }
    
    public void updatePopulation(Individual person) {
        // d.db(person.id);
        // d.db(person.info);  
        population.database.insertIndividual(person.id, person.info, person);
        
    }

    public void printMap() {
    // copied significantly from http://stackoverflow.com/questions/5061912/printing-out-a-2-d-array-in-matrix-format
        System.out.println();
        
        for (int row = 0; row < worldMap.space.length; row++) {
            for (int col = 0; col < worldMap.space[row].length; col++) {
                System.out.printf("%3s", worldMap.space[row][col]);
            }
            System.out.println();
        }
        System.out.println();
    }

 /*  ---------------------------------------------------------------------
  *  ------------------------- ACTION METHODS ----------------------------
  *  ---------------------------------------------------------------------
  */ 
    
    public int[] individualDecideNextStep(int currentX, int targetX, int currentY, int targetY) {
        
        int nextStepX;
        int nextStepY;
        
//        int[] targetCoordinates = {targetX, targetY};
        
        if (currentX < targetX) {
            nextStepX = currentX + 1;
        }
        else if (currentX > targetX) {
            nextStepX = currentX - 1;
        }
        else {
            nextStepX = currentX;
        }
        
        if (currentY < targetY) {
            nextStepY = currentY + 1;
        }
        else if (currentY > targetY) {
            nextStepY = currentY - 1;
        }
        else {
            nextStepY = currentY;
        }
        
//        int potentialStepX;
//        int potentialStepY;
//        
//        if (currentX < targetX) && (currentY < targetY) {
//            potentialStepX = currentX + 1;
//            potentialStepY = currentY + 1;
//            if (verifyCoordinatesFree(potentialStepX,potentialStepY) == false) {
//                
//            }
//            
//        }
//        else if (currentX > targetX) && (currentX > targetX) {
//            nextStepX = currentX - 1;
//            nextStepY = currentY - 1;
//        }
//        else {
//            nextStepX = currentX;
//        }
//        
//        if  {
//            
//        }
//        else if  {
//            
//        }
//        else {
//            nextStepY = currentY;
//        }
        
        int[] nextStepCoordinates = {nextStepX, nextStepY};
        return nextStepCoordinates;
    }
    
    public void individualTakeStep(Individual person, int[] nextStepCoordinates) {
     
        // d.db("before step: " + person);
        
        updateMap("...", person.coordinates);
        person.coordinates = nextStepCoordinates;
        updateMap(person.id, person.coordinates);
        printMap();
        
        // d.db("after step: " + person);
    }
    
    public void individualTravel(Individual person, int[] targetCoordinates) {
        person.moving = true;
        
        int startX = person.coordinates[0];
        int startY = person.coordinates[1];
        
        int[] startCoordinates = {startX, startY}; 
        
        int targetX = targetCoordinates[0];
        int targetY = targetCoordinates[1];
        
        int currentX = startX;
        int currentY = startY;
        
        int nextStepX;
        int nextStepY;
        
        while((currentX != targetX) || (currentY != targetY)) {
            int[] nextStepCoordinates = individualDecideNextStep(currentX, targetX, currentY, targetY);
            individualTakeStep(person, nextStepCoordinates);
            currentX = person.coordinates[0];
            currentY = person.coordinates[1];
        }
        
        person.moving = false;
    }
    
    
    

 /*  ---------------------------------------------------------------------
  *  ------------------------- HELPER METHODS ----------------------------
  *  ---------------------------------------------------------------------
  */  
      public int generateRandomInt(int min, int max) {                    // random int between 0 and 1
          
          Random r = new Random();
          int ran = r.nextInt(max - min) + min;                           // non-inclusive of the maximum value
          return ran;
      }  
    
    
      public double generateRandomDouble() {                    // double between 0 and 1
          
          Random r = new Random();
          double ran = r.nextDouble();
          return ran;
      }
      
      
      public static String generateString(Random rng, String characters, int length) {
      // copied significantly from "http://stackoverflow.com/questions/2863852/how-to-generate-a-random-string-in-java"
          char[] text = new char[length];
          for (int i = 0; i < length; i++) {
              text[i] = characters.charAt(rng.nextInt(characters.length()));
          }
          return new String(text);
      }
      

 /*  ---------------------------------------------------------------------
  *  ------------------------- MAIN METHOD -------------------------------
  *  ---------------------------------------------------------------------
  */   
    
    public static void main(String[] args) {
        
        // DON'T FORGET TO GIVE SIMULATOR TIME TO "WARM UP"
        

        CapDemSimulator CDS1 = new CapDemSimulator();
        
        CDS1.generateMap();
        CDS1.generatePopulation();
        
        for (int i=0; i<CDS1.buildingNumber; i++){
            CDS1.generateBuilding();
        }
        
        for (int i=0; i<CDS1.resourceNumber; i++){
            CDS1.generateResource();
        }
        
        for (int i=0; i<CDS1.populationSize; i++){
            CDS1.generateIndividual();
            // CDS1.population.database.printDictionary();
        }
        
        CDS1.population.database.printDictionary(); 
        // CDS1.printMap();
        
        int mapDimension = CDS1.worldMap.dimension;
        int[] mapCornerCoordinates = {mapDimension - 1, mapDimension - 1};
        // System.out.println(CDS1.population.database.A[0]);
        // System.out.println("target coordinates: " + Arrays.toString(mapCornerCoordinates));
        for (int i = 0; i < CDS1.populationSize; i++) {
            int[] ranCoor = CDS1.generateRandomCoordinates();
            CDS1.d.db(ranCoor);
            CDS1.individualTravel(CDS1.population.database.A[i].person, ranCoor);
        }
        
        CDS1.population.database.printDictionary(); 
        // CDS1.printMap();
        
//        String firstName = CDS1.population.database.A[0].key;
//        boolean present = CDS1.population.database.member(firstName);
//        System.out.print(present);
        
        
    }
}