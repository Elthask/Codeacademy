public class Magic {
	public static void main(String[] args) {
	int myNumber = 12;
	int stepOne = myNumber * myNumber;
	int stepTwo = stepOne + myNumber;
  int stepThree = stepTwo / myNumber;
  int stepFour = stepThree + 17;
  int stepFive = stepFour - myNumber;
  int stepSix = stepFive / 6;
  
  System.out.println(stepSix);
	}
}

//despites all the result in the operation it gives the result 3
