function App() {
  return (
    <DesignCanvas
      title="The Mindful Feast — Website Directions"
      subtitle="Three explorations for the homepage. Drag to pan, scroll to zoom. Click an artboard to focus."
    >
      <DCSection
        id="home"
        title="Homepage — three directions"
        subtitle="A · Editorial Garden  ·  B · Atelier  ·  C · Seasonal Almanac"
      >
        <DCArtboard id="a" label="A · Editorial Garden — cream, magazine, asymmetric" width={1440} height={3900}>
          <OptionA />
        </DCArtboard>
        <DCArtboard id="b" label="B · Atelier — charcoal & gold, by reservation" width={1440} height={3700}>
          <OptionB />
        </DCArtboard>
        <DCArtboard id="c" label="C · Seasonal Almanac — sage blocks, journal grid" width={1440} height={3650}>
          <OptionC />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
