package interview;

/**
 * Please create validation method for parentheses
 *
 * Valid - ()(()())((()))(())
 * Invalid - ()(()))))(()()
 *
 * Show the usage of the method, output it.
 */
public class ParenthesesValidation {
    public static void main(String[] args) {
        String validInput = "()(()())((()))(())";
        String invalidInput = "()(()))))(()()";

        System.out.println(
                new ParenthesesValidation().validate(validInput)
        );
        System.out.println(
                new ParenthesesValidation().validate(invalidInput)
        );

    }

    private boolean validate(String s) {
        int parenthesesCounter = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
               parenthesesCounter++;
            } else if (parenthesesCounter > 0 && s.charAt(i) == ')') {
               parenthesesCounter--;
            } else {
                return false;
            }
        }

        return parenthesesCounter == 0;
    }
}
