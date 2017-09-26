package com.grassrootsgame.capitalistdemocracysimulator;

public class Building {
        String type;
        int[] coordinates;
        
        public Building () {}                            // default contructor for a Building
        
        public Building (String buildingType) {          // constructor for a Building of a specific type
            type = buildingType;
        }
        
        public static void main(String[] args) {}
    }