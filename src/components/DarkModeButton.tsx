import { useTheme } from 'next-themes'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className={`${theme === 'dark' ? 'bg-[#041d4c]' : 'bg-[#ffffff]'} absolute left-4 bottom-8 z-50 w-12 h-12 bg-[length:40%] rounded-full bg-center bg-no-repeat bg-[url(https://ik.imagekit.io/2zlgs27bjo/public/icons/lamp-dark.svg)]`}

      onClick={toggleDarkMode}
    >
      {/* {theme === 'dark' ? 'Light ' : 'Dark '} */}
    </button>
  )
}

export default DarkModeButton