package com.grassrootsgame.capitalistdemocracysimulator;

import java.util.Arrays;

public class Individual {                                // basic definition for the Individual class
        
        String id;
        String[][] skillSet;
        int[] coordinates;
        String[] info;
        boolean moving;
        
        public Individual () {}                               // default contructor for an Individual
        
        public Individual (String name) {                     // constructor for a named Individual
            id = name;
        }
        
        public String toString() {
            return ("Individual called " + id + ", at location " + Arrays.toString(coordinates) +
                    " with a skill set of: " + Arrays.deepToString(skillSet));
        }
        
        public static void main(String[] args) {}
}