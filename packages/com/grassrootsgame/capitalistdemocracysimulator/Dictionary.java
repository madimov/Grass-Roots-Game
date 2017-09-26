/* File: Dictionary.java
 * Author: Miko Dimov
 * Date: 10/26/2016
 * Purpose: This implements a Dictionary with typical manipulation methods,
 * taken from HW06, Problem B.2 for CS 112. 
 */

package com.grassrootsgame.capitalistdemocracysimulator;

import java.util.Arrays;

public class Dictionary { 

    // basic definition of the Pair class.
    
    public class Pair {
        String key;
        String[] value;
        Individual person;
        
        public Pair() { }               // default constructor, 
                                        // with null key and values.
        public Pair(String k, String[] v, Individual p) {
            key = k;
            value = v;
            person = p;
        }
        
        public String toString() { 
            return (key + ": " + Arrays.toString(value));
        }   
    }
    
 /*  --------------------------------------------------------------------
  *  -------------------------- DICTIONARY METHODS ----------------------
  *  --------------------------------------------------------------------
  */
    
    private Debugger d = new Debugger();
    
    private int LENGTH = 10;   
    public Pair[] A = new Pair[LENGTH];   
    private int next = 0;
    
    public void insertIndividual(String k, String[] val, Individual person) 
    {        
        // This function returns no value, but inserts a student k taking
        // classes enumerated in string array val, into the dictionary.
        
        // d.d.db(k);
        // d.db(val);
        // d.db("about to check if " + k + " is a member before insertion...");
        if (!member(k))                 // If key k is not in the dictionary, 
        {                               // insert a new Pair containing k & val
            if (size() == LENGTH)       // into the array A in ascending order 
            {                           // of the keys; if the array A is full, 
                resize();               // resize it to twice as big.
            }
            
            Pair newPair = new Pair(k, val, person);
 
            for (int i = size(); i >= 0; i--)
            {
                if (A[i] == null)
                {
                    A[i] = newPair;
                }
                else if((newPair.key).compareTo(A[i].key) < 0)
                {                       // shift all the existing keys over to 
                    A[i+1] = A[i];      // make room, keeping the list in 
                    A[i] = newPair;     // sorted order.
                }
            }
        }

        else                            // if k is already a member, replace  
        {                               // existing value with new value val.
            int location = location(k, 0, size()-1);        
            A[location].value = val;    // get location of k in table, and   
            A[location].person = person;// update value of at that location.
        }                               
        
        next++;                         // increment next pointer.
        
        // d.db(k + " has been added to dictionary");
        // System.out.println();
        // System.out.println();
    }
    
    public String[] lookupClasses(String k) throws KeyNotFoundException     
    {       
        // This function returns a string array of the classes that
        // student k is currently taking, throwing an exception if student
        // is not the dictionary.
        
        if (!member(k))                 // throw the exception if k is not
        {                               // in the table.
            throw new KeyNotFoundException();
        }
        else
        {
            int location = location(k, 0, (size() - 1));
            String[] classes = A[location].value;
            return classes;             // return value associated with key k.
        }
    }
    
    public boolean member(String k)     // Return true if k is in dictionary,  
    {                                   // false otherwise, using binary search.  
        // d.db(k);
        // d.db("memberAux checking if " + k + " is a member: " + memberAux(k, 0, size() - 1));
        return memberAux(k, 0, size() - 1);  
    }
    
    private boolean memberAux(String k, int lo, int hi)  
    {                                   
        // This function performs binary search for student k in dictionary,
        // using lecture example as template!
        
        if (isEmpty())                  
        {
            return false;
        }
        if (hi < lo)  
        {
            return false;
        }
        else 
        {
            int mid = (lo+hi) / 2;
//            d.db("lo = " + lo + ", mid = " + mid + ", hi = " + hi);
//            d.db("A[" + mid +"].key = " + A[mid].key + " ... whereas the new id = " + k);
//            d.db("A[mid] = " + A[mid]);
//            d.db("A[mid] != null: " + (A[mid] != null));
//            d.db("k == A[mid].key: " + (k == A[mid].key));
//            System.out.println("k = " + k.getClass().getName());
//            System.out.println("A[mid].key = " + A[mid].key.getClass().getName());
            if ((A[mid] != null) && k.equals(A[mid].key))
            {
                return true;
            }
            else if ((A[mid] != null) && (k.compareTo(A[mid].key) < 0))
            {
                return memberAux(k, lo, mid - 1);   
            }
            else if ((A[mid] != null) && (k.compareTo(A[mid].key) > 0))
            {
                return memberAux(k, mid + 1, hi);
            }
            return false;
        }
    }   
        
    public void deleteStudent(String k)     
    {
        // This function removes a student k from the dictionary.
        
        if (!member(k))                 // if student is not a member,  
        {                               // do nothing.
            return;
        }         
        else                            // otherwise, remove the Pair  
        {                               // containing student from the table.
            int location = location(k, 0, (size() - 1));
            A[location] = null;
            
            for (int i = location + 1; i <= size(); i++)
            {                           // shift everything larger than this key
                A[i-1] = A[i];          // in the sorted array down, to remove 
            }                           // the empty slot.
        }
        
        next--;                         // decrement next pointer.
    }
    
    public void dropClass(String k, String c)
    {
        // This function finds student k in the dictionary,
        // and removed class c from their list of classes.
        
        if (!member(k))                 // if student is not a member, 
        {                               // do nothing.
            return;
        }
        else
        {
            int location = location(k, 0, (size() - 1));
            String[] classes = A[location].value;
            
            if (!memberArray(c, classes))         
            {                           // if the class is not in student's 
                return;                 // classes, do nothing.
            }
            else                        // otherwise, reallocate an array where 
            {                           // the class to drop has been removed.
                String[] newclasses = new String[(classes.length - 1)];
                int count = 0;
                
                for (int i = 0; i <= (classes.length - 1); i++)
                {                       // drop class c from student's classes.
                    if (classes[i] != c)          
                    {                               
                        newclasses[count] = classes[i];
                        count++;
                    }
                }                       // insert this array (smaller by one)
                                        // into this pair's value.
                A[location].value = newclasses;   
            }
        }
    }
        
    public void addClass(String k, String c, Individual person) 
    {
        // This function finds student k in the dictionary,
        // and adds class c to their list of classes.
        
        if (!member(k))                 // If k is not in the dictionary, 
        {                               // add them with the single class c.
            String[] classes = new String[1];
            classes[0] = c;
            insertIndividual(k, classes, person);
            return;
        }
        else
        {
            int location = location(k, 0, (size() - 1));
            String[] classes = A[location].value;
            
            if (memberArray(c, classes))         
            {                           // if student is already in this class,
                return;                 // do nothing.
            }
            else                        // If student is not in this class,   
            {                           // allocate array bigger by one               
                String[] newClasses = new String[(classes.length + 1)];  
                
                for(int i = 0; i < classes.length; ++i)             
                {                       // transfer all previous classes,
                    newClasses[i] = classes[i];  
                }                       // in addition to the new class c.
                newClasses[newClasses.length - 1] = c;
                A[location].value = newClasses;
            }
        }
    }
    
    public boolean enrolled(String k, String c) 
    {
        // This function returns true if student k is enrolled in class c,
        // and false otherwise.
        
        if (!member(k))
        {
            return false;
        }
        
        int location = location(k, 0, (size() - 1));
        if (memberArray(c, A[location].value))   
        {                               // return true if student k is                                               
            return true;                // enrolled in class c.
        }
        
        else
        {
            return false;
        }
    }
    
    public int size() 
    {          
        // This function returns the number of Pairs in the table.
        if (isEmpty())
            return 0;
        else
        {
            int size = A.length - (A.length - next);
            return size;
        }
    }
    
    public boolean isEmpty() 
    {               
        // This function returns true if the dictionary has no entries, 
        // and false otherwise.
        return (next == 0);
    }
    
    private int location(String k, int lo, int hi) 
    {
        // This function uses binary search to find location of key k, 
        // or return -1 if k is not found.
        
        if (hi < lo)  
        {
            return -1;
        }
        else 
        {
            int mid = (lo+hi) / 2;
            if (k == A[mid].key)
            {
                return mid;
            }
            else if (k.compareTo(A[mid].key) < 0)
            {
                return location(k, lo, mid-1);   
            }
            else if (k.compareTo(A[mid].key) > 0)
            {
                return location(k,mid+1,hi);
            }
            else
                return -1;
        }
    }
    
    private boolean memberArray(String k, String[] C) 
    {
        // This function returns true if string k is in the array C, 
        // and false otherwise.
        
        if (C.length == 0)
        {
            return false;
        }
        else 
        {
            boolean member = false;
            
            for (int i = 0; i < C.length; i++)
            {
                if (C[i] == k)
                {
                    member = true;
                }
            } 
            return member;
        }
    }
    
    private void resize() 
    {   
        // This function doubles the size of the dictionary.
        
                                        // allocate an array B twice as big as A
        Pair[] B = new Pair[(2*A.length)];                
        LENGTH = B.length;              // update LENGTH to new max size 
                                                                            
        for(int i = 0; i < next; ++i)   // copy all the elements from A to B            
        {
            B[i] = A[i];
        }
        A = B;                          // replace A with B       
    }
    
    public void printDictionary() 
    {
        // This function is only used in the unit test.
        for(int i = 0; i < size(); ++i)
            System.out.println(i + ": " + A[i]);
    }
    
 /*  ---------------------------------------------------------------------
  *  -------------------------- ITERATOR METHODS -------------------------
  *  ---------------------------------------------------------------------
  */

  private int nextPair = 0;             // index into array A pointing to next 
                                        // pair to be enumerated when  
                                        // nextPair is called.
  private int nextStudent = 0;          // index into array A pointing to next 
                                        // pair to be enumerated when 
                                        // nextStudent is called.
  private String className;             // class the student iterator is 
                                        // enumerating the class list for.

  public void initPairIterator() 
  {
      // This function initializes a general iterator which can enumerate all 
      // Pairs in the dictionary in order (from smallest key to largest). 
      
      nextPair = 0;
  }

  public boolean hasNextPair() 
  {
      // This function returns true if there is another Pair to be enumerated 
      // by the general iterator.
      
      if (A[nextPair] != null)
      {
          return true;
      }
      
      else
      { 
          return false;
      }
  }

  public String nextPair() 
  {
      // This function returns a String representation of the next pair to be 
      // enumerated by the general iterators.

      String nextPairString = A[nextPair].toString();
      nextPair++;
      return nextPairString;
  }
       
  
  public void initStudentIterator(String c) 
  {   
      // This function initializes an enumeration of the students in class c. 

      nextStudent = 0;
      className = c;
  }
  
public boolean hasNextStudent() 
  {
      // This function returns true if there are still students to be enumerated
      // and false otherwise.
      for (int i = nextStudent; (((A[nextStudent] != null)) && i < size()); i++)
      {             // iterate only over students after the current next student
          if (memberArray(className, A[i].value))
          {         // if this student is taking this class, return true. 
              return true;
          }
      }             // otherwise, return false.
      return false;
  }
  
  public String nextStudent() 
  {
      // This function returns the name of the student that nextStudent 
      // is indicating. 
      String nextStudentName = "";
      if (hasNextStudent())  // if there is another student also taking class,
      {              
          for (int i = nextStudent; (((A[nextStudent]!= null))
                                         && i < size()); i++)
          {                  // iterate over students after current next student
              if (memberArray(className, A[i].value))
              {              // if this student is taking this class
                  nextStudent = i;
                             // set next student to this student
                  nextStudentName = A[nextStudent].key;
                  String nextStudentClasses = (Arrays.toString
                                                   (A[nextStudent].value));
                  String nextStudentInfo = (nextStudentName + 
                                            ":" + nextStudentClasses);
                             // increment next sudent pointer, changing state.
                  nextStudent++;
                  return nextStudentInfo;
              }
          }
      }
      return "";
  }
        
  
 /*  ---------------------------------------------------------------------
  *  -------------------------- MAIN METHOD ------------------------------
  *  ---------------------------------------------------------------------
  */   
    
    public static void main(String[] args) {
        
        Dictionary D = new Dictionary(); 
        
        // Insert three (key,value) pairs and test basic methods
        
        String[] A = { "CS111", "CS131", "WR99", "EC101" };
        String[] B = { "CS111", "MA123", "WR100", "SO100" };
        String[] C = { "CS111", "MA294", "WR150", "CL212" };
        String[] E = { "CS350", "CS235", "EC101", "MU101" };
        String[] F = { "CS111", "MA124", "BI108", "SO105" };
        String[] G = { "CS591", "MA442", "EN212", "EC101" };
        
        Individual a = new Individual();

        D.insertIndividual("Christie,Chris",A, a); 
        D.insertIndividual("Carson,Ben", B, a);
        D.insertIndividual("Trump,Donald", C, a);
        D.insertIndividual("Kasich,John",E, a); 
        D.insertIndividual("Cruz,Ted", F, a);
        D.insertIndividual("Bush,Jeb", G, a);
        
        System.out.println("\n[1] Should print out:"); 
        System.out.println("0: Bush,Jeb: [CS591,MA442,EN212,EC101]");
        System.out.println("1: Carson,Ben: [CS111,MA123,WR100,SO100]");
        System.out.println("2: Christie,Chris: [CS111,CS131,WR99,EC101]");
        System.out.println("3: Cruz,Ted: [CS111,MA124,BI108,SO105]");
        System.out.println("4: Kasich,John: [CS350,CS235,EC101,MU101]");
        System.out.println("5: Trump,Donald: [CS111,MA294,WR150,CL212]\n");
        
        D.printDictionary();  
        
        System.out.println("\n[2] Should print out:\n6"); 
        System.out.println(D.size()); 
        
        
        System.out.println("\n[3] Should print out:\nfalse"); 
        System.out.println(D.isEmpty()); 
        
        
        System.out.println("\n[4] Should print out:\ntrue"); 
        System.out.println(D.member("Cruz,Ted")); 
        
        
        System.out.println("\n[5] Should print out:\nfalse"); 
        System.out.println(D.member("Jindal,Bobby")); 
        
        
        D.deleteStudent("Bush,Jeb");
        System.out.println();
        D.deleteStudent("Christie,Chris");
        System.out.println("\n[6] Should print out:\nfalse  false"); 
        System.out.println(D.member("Bush,Jeb") + "  " + D.member("Christie,Chris")); 
        
        
        System.out.println("\n[7] Should print out:\n[CS111, MA123, WR100, SO100]"); 
        String name = "Carson,Ben";
        try {
            System.out.println(Arrays.toString(D.lookupClasses(name))); 
        }
        catch(KeyNotFoundException e) {
            System.err.println("Key not found: " + name);
        }
        
        
        name = "Jindal,Bobby";
        System.out.println("\n[8] Should print out:");
        System.err.println("Key not found: " + name); 
        try {
            System.out.println(Arrays.toString(D.lookupClasses(name))); 
        }
        catch(KeyNotFoundException e) {
            System.err.println("Key not found: " + name);
        }
        
        
        System.out.println("\n[9] Should print out:\n[CS111, WR100, SO100]");  
        D.dropClass("Carson,Ben", "MA123");
        D.dropClass("Carson,Ben", "EC102"); 
        try {
            System.out.println(Arrays.toString(D.lookupClasses("Carson,Ben"))); 
        }
        catch(KeyNotFoundException e) {
            System.err.println("Key not found: Carson,Ben");
        } 
        
        
        System.out.println("\n[10] Should print out:\n[CS111, MA294, WR150, CL212, CS591]");  
        D.addClass("Trump,Donald", "CS591", a);
        D.addClass("Trump,Donald", "WR150", a); 
        try {
            System.out.println(Arrays.toString(D.lookupClasses("Trump,Donald"))); 
        }
        catch(KeyNotFoundException e) {
            System.err.println("Key not found: Carson,Ben");
        } 
        
        
        System.out.println("\n[11] Should print out:\nfalse  true"); 
        D.dropClass("Walker,Scott","PH150");
        System.out.print(D.member("Walker,Scott") + "  " );
        D.addClass("Walker,Scott","PH110", a); 
        System.out.println(D.member("Walker,Scott")); 
        
        System.out.println("\n[12] Should print out:\ntrue"); 
        System.out.println(D.enrolled("Trump,Donald", "CS591"));  
        
        
        System.out.println("\n[13] Should print out:\nfalse"); 
        System.out.println(D.enrolled("Trump,Donald", "CS101")); 
        
        
        // testing iterators       
        
        System.out.println("\n[14] Should print out:");
        System.out.println("0: Carson,Ben: [CS111,WR100,SO100]");
        System.out.println("1: Cruz,Ted: [CS111,MA124,BI108,SO105]");
        System.out.println("2: Kasich,John: [CS350,CS235,EC101,MU101]");
        System.out.println("3: Trump,Donald: [CS210,MA294,WR150,CL212,CS591]");
        System.out.println("4: Walker,Scott: [PH110]\n");
        D.printDictionary(); 
        
        System.out.println("\n[15] Should print out same but without index numbers:");
        D.initPairIterator(); 
        
        while(D.hasNextPair()) {
            System.out.println(D.nextPair());
        }
        
        System.out.println("\n[16] Should print out:\nCarson,Ben:  [CS111,WR100,SO100]");
        D.initPairIterator(); 
        System.out.println(D.nextPair());
        
        System.out.println("\n[17] Should print out:");  
        D.initStudentIterator("CS111");
        System.out.println("Carson,Ben: [CS111,WR100,SO100]");
        System.out.println("Cruz,Ted: [CS111,MA124,BI108,SO105]");
        System.out.println("Trump,Donald: [CS111,MA294,WR150,CL212,CS591]\n");
        
        while(D.hasNextStudent()) {
            System.out.println(D.nextStudent());
        }
        
        System.out.println("\n[18] Should print out:\nTrump,Donald:[CS111,MA294,WR150,CL212,CS591]");
        D.initStudentIterator("CL212"); 
        
        while(D.hasNextStudent()) {
            System.out.println(D.nextStudent());
        } 
        
        System.out.println("\n[19] Testing resizing; should print out a dictionary with 14 pairs.\n"); 
        D.insertIndividual("Clinton, Hillary",A, a); 
        D.insertIndividual("Sanders,Bernie", B, a);
        D.insertIndividual("Lincoln,Abraham", C, a);
        D.insertIndividual("Kennedy,John",E, a); 
        D.insertIndividual("Bush,George", F, a);
        D.insertIndividual("Reagan,Ronald", G, a);
        D.insertIndividual("Nixon,Dick",A, a); 
        D.insertIndividual("Carter,Jimmy", B, a);
        D.insertIndividual("Johnson,Lyndon", C, a);
 
        D.printDictionary(); 
        
    }   
}

class KeyNotFoundException extends Exception {}