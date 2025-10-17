

export default function Presentation() {
    const pdfUrl = './public/files/presentationdelciecomp.pdf'; // Chemin relatif au dossier public
  
    return (
      <div>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Voir la présentation
        </a>
      </div>
    );
  }
  

