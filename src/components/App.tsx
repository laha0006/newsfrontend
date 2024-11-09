import '../App.css'
// import NewsCard from "./NewsCard.tsx";
import NewsCardFlexContainer from "./NewsCardFlexContainer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";


function App() {

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle/>
          <div className="bg-primary text-primary-foreground">
            <h1 className="text-4xl font-news">
                Kort Fortalt
            </h1>
            <NewsCardFlexContainer/>
        </div>
      </ThemeProvider>
  )
}

export default App
