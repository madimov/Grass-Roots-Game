package com.grassrootsgame.capitalistdemocracysimulator;

import java.util.Arrays;

public class Debugger {

// beginning of debugging code
   
    public Debugger () {}                       // default contructor for a Group
    
    public static boolean debug = true; 
    
    public static void db(String s) { 
        if(debug)
            System.err.println("\t" + s); } 
    
    public static void db(int v) { 
        if(debug)
            System.err.println("\t" + v); }
    
    public static void db(Skill sk) { 
        if(debug)
            System.err.println("\t" + sk); }
    
    public static void db(Individual i) { 
        if(debug)
            System.err.println("\t" + i); }
    
    public static void db(Boolean b) { 
        if(debug)
            System.err.println("\t" + b); }
    
    public static void db(double d) { 
        if(debug)
            System.err.println("\t" + d); }
    
    public static void db(long l) { 
        if(debug)
            System.err.println("\t" + l); }
    
    public static void db(int[] intArr) {
        if(debug)
            System.err.println("\t" + Arrays.toString(intArr)); }
    
    public static void db(String[] strArr) {
        if(debug)
            System.err.println("\t" + Arrays.toString(strArr)); }
    
    public static void db(String[][] str2DArr) {
        if(debug)
            System.err.println("\t" + Arrays.deepToString(str2DArr)); }
    
    // end of debugging code
    
}