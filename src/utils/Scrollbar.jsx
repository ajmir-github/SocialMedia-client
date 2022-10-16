const style = `
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #121212; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1976d2; 
  }
`

export default function ScrollBar(){
  return <style jsx="true">{style}</style>
}