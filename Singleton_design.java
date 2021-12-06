//singleton design principle for Single thread(Creational pattern)
//one instance at a time
//must have global point to call

public final class Singleton{
    
    private static Singleton INSTANCE = null;
    
    private Singleton(){}
    
    public static Singleton getInstance(){
        
            if(INSTANCE == null) INSTANCE = new Singleton();
            
            return INSTANCE;
            
        }
    }
}
