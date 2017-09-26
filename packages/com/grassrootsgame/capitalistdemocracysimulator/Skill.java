package com.grassrootsgame.capitalistdemocracysimulator;

public class Skill {                                     // basic definition for the Skill class
        
        String skillName;                                     // e.g. Science
        Double skillLevel;                                    // e.g. 0.7
        String[] skillUnit = {skillName, "" + skillLevel};
        
        public Skill () {}                                    // default constructor for a Skill
        
        public Skill (String name) {                          // constructor for non-quantified skill
            skillName = name;
        }
        
        public Skill (String name, Double level) {            // constructor for quantified skill
            skillName = name;
            skillLevel = level;
        } 
        
        public String toString() { 
            return ("{SKILL: " + skillName + " = LEVEL " + skillLevel + "}");
        }
        
        public static void main(String[] args) {}
    }