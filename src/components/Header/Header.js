import './Header.css'; // Importa el componente Header
function Header() { // para darle una clase al header se usa className en vez de class
    return (
        <header className='header'>
            <img src='/img/header.png' alt='org' />
        </header>
    )
}
export default Header; // Exporta el componente Header