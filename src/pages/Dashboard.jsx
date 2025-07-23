import "../App.css";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Plus } from "../icons/Plusicon";
import { ShareIcon } from "../icons/ShareIcon";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
function Dashboard() {
  const [ModalOpen, setModalChange] = useState(false);
  const contents = useContent();
  return (
    <>
      <CreateContentModal
        open={ModalOpen}
        onClose={() => {
          setModalChange(false);
        }}
      ></CreateContentModal>
      <Sidebar />
      <div className="bg-neutral-100 p-4 min-h-screen ml-72">
        <div className="flex justify-end gap-2">
          <Button
            onClick={() => {
              setModalChange(true);
            }}
            variant="primary"
            size="md"
            text="Add Content"
            startIcon={<Plus size="md" />}
          />
          <Button
            variant="secondary"
            size="md"
            text="Share Brain"
            startIcon={<ShareIcon size="md" />}
          />
        </div>
        <div className="flex items-start gap-4 p-4 flex-wrap">
          {
            contents.map(({title,link,type})=><Card title={title} link={link} type={type}/>)
          }
        </div>
      </div>
    </>
  );
}
export default Dashboard;
