import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "this is a test label",
      content: "this is a test content bloc of text",
    },
    {
      id: 2,
      label: "we need another label test",
      content: "we need anbother bloc of text to act as a test.",
    },
    {
      id: 3,
      label: "just making up a label now",
      content:
        "this is also another bloc of text used for some other label i made up",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
