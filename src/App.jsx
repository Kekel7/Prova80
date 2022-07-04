import './App.css'
import List from './List.jsx'


function App(){

return(
    
    <div className='head'>

        <img src="logo.svg"/>  
        <List />
        <div className='botoes'>
            <button className='create'>
                criar conta 
            </button>
            <button className='in'>
                entrar
            </button>
        </div>
        
    </div>
)
}
export default App;

