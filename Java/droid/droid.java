public class Droid {
  int batteryLevel;
  
  public Droid(){
    batteryLevel = 100;
  }
  
  public void activate() {
    System.out.println("Activated. How can I help you?");
    batteryLevel = batteryLevel - 5;
    System.out.println("Battery level is: " + batteryLevel + " percent.");
  }
  
  public void chargeBattery(int hours) {
    
    batteryLevel = batteryLevel + hours;
    
    if(batteryLevel >= 100){
      System.out.println("Battery Level = " + batteryLevel + " Droid is charged.");
    }
    else{
      if (hours == 0){
        System.out.println("Droid is not charging");
      }
      else{
       System.out.println("Droid charging...");
      System.out.println(batteryLevel + " %");
      }
    }
  }
  
  public int checkBatteryLevel(){
      System.out.print("Battery level is: " + batteryLevel);
      return batteryLevel;
    }
  
  public void hover(int feet) {
    if(feet < 2){
      System.out.println("Error! I cannot hover above 2 feet.");
    }
    else{
      System.out.println("Hovering at " + feet + " feet");
    }
  }
  
  public static void main (String [] args) {
    Droid myDroid = new Droid();
    myDroid.activate();
    myDroid.chargeBattery(0);
    myDroid.hover(20);
  }
}
