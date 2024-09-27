import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

type PdfViewerProps = {
  initialDoc?: string | string[];
};

function PdfViewer({ initialDoc }: Readonly<PdfViewerProps>) {
  const licenseKey = import.meta.env.VITE_APRYSE_LICENSE_KEY;
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/',
        licenseKey,
        initialDoc,
        fullAPI: false,
        enableOfficeEditing: true,
      },
      viewer.current!
    ).then(async (instance) => {
      const { UI } = instance;

      UI.enableFeatures([
        // UI.Feature.ComparePages,
        UI.Feature.ContentEdit,
        UI.Feature.FilePicker,
        // UI.Feature.MultiTab,
        // UI.Feature.MultiViewerMode,
        UI.Feature.MultipleViewerMerging,
        UI.Feature.SideBySideView,
      ]);
    });
  }, [initialDoc, licenseKey]);

  return (
    <div
      className="webviewer"
      ref={viewer}
      style={{ height: '100vh', flexGrow: 1 }}
    />
  );
}

export default PdfViewer;
