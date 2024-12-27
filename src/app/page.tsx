
import { FloatingNav } from "components/ui/FloatingNav";
import Grid from "components/Grid";
import Hero from "components/ui/Hero";
import Image from "next/image";
import RecentProjects from "components/RecentProjects";
import { navItems } from "data";

export default function Home() {
  return (
    <main className="relative h-full bg-'#000317' flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full ">
      <h1 className="text-white-200"></h1>
      <FloatingNav navItems={navItems}/>
  
          <Hero/>
          
        
      <Grid/>
      <div id="projects">
      <RecentProjects />
      </div>
    </div>
   </main>

  );
}
