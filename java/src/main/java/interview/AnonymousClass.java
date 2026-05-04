package interview;

/**
 * Please make ImageResource renders only in case if resources is ready.
 * If it's not ready - it should output "Rendering the error text" text.
 * If it's ready - it should output "Rendering the ready image" text.
 * You can't modify ImageResource class source code.
 *
 * Hint: Use anonymous class
 */
public class AnonymousClass {

    public static void main(String[] args) {
        ImageResource resource = createImageResource();
        resource.render();

    }

    private static class ImageResource {

        public void render() {
            System.out.println("Rendering the image");

        }

        public boolean isReady() {
            // just a mock
            return Math.random() > 0.5f;
        }
    }

    private static ImageResource createImageResource() {
        return new ImageResource() {

            @Override
            public void render() {
                if (!isReady()) {
                    System.out.println("Rendering the error text");
                } else {
                    System.out.println("Rendering the ready image");
                }
            }
        };
    }
}