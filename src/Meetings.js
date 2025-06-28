export default function Meetings() {
  return (
    <section className="page-section">
      <h2>📅 Meetings</h2>
      <p>Check our live calendar below or subscribe:</p>
      <iframe
        title="Calendar"
        src="https://calendar.google.com/calendar/embed?src=sacredspacefoundationatlanta%40gmail.com&ctz=America%2FNew_York"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </section>
  );
}
