export default function AboutUs() {
  return (
    <section id="aboutUs" className="py-3">
      <h3 className="font-bold text-gray-800 text-3xl mb-1">
        About Us
      </h3>

      <p className="font-semibold text-gray-700">
        Lively Contributions is a project that aims to generate personalized
        graphics of Github contributions, so that they can be used to decorate
        websites or README.md.
      </p>
      <p className="font-semibold text-gray-700">
        Generated in SSR (Server Side Rendering), the svgs have customization
        options such as contribution color palette, background color, animation
        and execution delay.
      </p>
      <p className="font-semibold text-gray-700">
        On this page, you can check the project`s stacks or styling options. If
        you`re interested in creating your own, navigate to the Maker page.
      </p>
    </section>
  );
}
