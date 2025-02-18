import './App.css'

export default function App() {
  return (
    <div className='container p-4'>
    {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue-450">You have a new message!</p>
        </div>
      </div> */}
      <TailwindCSSButton >
        TailwindCSS
      </TailwindCSSButton>
    </div> 
    
  )
}

function TailwindCSSButton(props){
  return (
    <a href={props.href} className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 inline-block'>{props.children}</a>
  )
}
