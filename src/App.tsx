import PdfViewer from './components/pdf-viewer';

function App() {
  return (
    <PdfViewer
      initialDoc="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
      key={1}
    />
  );
}

export default App;
