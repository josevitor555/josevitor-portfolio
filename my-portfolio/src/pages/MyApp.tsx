// Shadcn components
import { Button } from "@/components/ui/button"

// import './index.css'

const App = () => {

    return (
        <div className="myApp">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold underline">Hello World</h1>
                <Button>Click me</Button>
            </div>
        </div>
    );
}

export default App;
