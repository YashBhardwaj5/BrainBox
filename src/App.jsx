import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Plus } from "./icons/Plusicon";
import { ShareIcon } from "./icons/ShareIcon";
function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-100">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            Components
            <Button
              variant="secondary"
              size="md"
              text="Share Brain"
              startIcon={<ShareIcon size="md" />}
            />
            <Button
              variant="primary"
              size="md"
              text="Add Content"
              startIcon={<Plus size="md" />}
            />
            <div className="flex items-start gap-4">
            <Card title="Youtube Card" type="youtube" link="https://www.youtube.com/watch?v=CqWF2fZJ_p0"/>
            <Card title="Twitter Card" type="twitter" link="https://x.com/elonmusk/status/1946759974522356064"/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
