package com.grassrootsgame.capitalistdemocracysimulator;

public class Resource {
        String type;
        int amount;
        int[] coordinates;
        String[] info;
        
        public Resource () {}
        
        public Resource (String resourceType) {
            type = resourceType;
        }
        
        public Resource (String resourceType, int resourceAmount) {
            type = resourceType;
            amount = resourceAmount;   
        }
        
        public static void main(String[] args) {}
    }