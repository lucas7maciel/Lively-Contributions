export default function Styles() {
  return (
    <section id="styles" className="py-4">
      <h3 className="font-bold text-gray-800 text-3xl mb-1">Styles</h3>
      <p className="font-semibold text-gray-700 mb-4">
        As for stylizations, we offer the following options:
      </p>

      <table className="w-full shadow-md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Options</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Animation</td>
            <td>Drop, Scale, Pacman, Random</td>
            <td>Random</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>Light, Dark, Red, Yellow, Blue, Purple</td>
            <td>Dark</td>
          </tr>
          <tr>
            <td>Bg</td>
            <td>Light, Dark, None, any color (HEX)</td>
            <td>Dark</td>
          </tr>
          <tr>
            <td>Delay</td>
            <td>Any float value (seconds)</td>
            <td>0s</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
