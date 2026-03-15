import { useState } from "react";


// const Section = ({title,description}) => {
//     const [isVisible,setIsVisible] = useState(false)
//     return (
//         <div className="border  border-black p-2 m-2">
//         <h3 className="font-bold">{title}</h3>
//         {isVisible?
//             <button 
//             onClick={()=>setIsVisible(false)}
//             className="cursor-pointer underline bg-fuchsia-600 border-2 border-black      rounded-md py-1 px-4 ">Hide</button>
//             :
//             <button 
//             onClick={()=>setIsVisible(true)}
//             className="cursor-pointer underline bg-fuchsia-600 border-2 border-black      rounded-md py-1 px-4 mx-2">Show</button>
           

//         }
//         {isVisible && <p>{description}</p>}
//         </div>
//     );
    
// }


// const Instamart = () => {
//     return(
//         <div>
//         <h1 className="text-4xl">Instamart</h1>
//         <Section 
//         title={"About Instamart"}
//         description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//         />
//         <Section 
//         title={"Team Instamart"}
//         description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"}
//         />
//         <Section 
//         title={"Careers"}
//         description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
//         />
//         {/*
//           <AboutInstamart/>
//           <DetailsofInstamart/>
//           <TeamInstamart/>
//           <Product/>
//           <Careers/>*/
//         }
//         </div>
//     )
// }

const Section = ({title,description,isVisible,setIsVisible}) => {
   
    return (
        <div className="border  border-black p-2 m-2">
        <h3 className="font-bold">{title}</h3>
        {isVisible?
            <button 
            onClick={()=>setIsVisible(false)}
            className="cursor-pointer underline bg-fuchsia-600 border-2 border-black      rounded-md py-1 px-4 ">Hide</button>
            :
            <button 
            onClick={()=>setIsVisible(true)}
            className="cursor-pointer underline bg-fuchsia-600 border-2 border-black      rounded-md py-1 px-4 mx-2">Show</button>
           

        }
        {isVisible && <p>{description}</p>}
        </div>
    );
    
}


const Instamart = () => {
    // const [sectionConfig,setSectionConfig] = useState({
    //     showAbout:false,
    //     showteam:false,
    //     showcareers:false
    // })
    const [visibleSection,setIsVisibleSection] = useState("about");
    return(
        <div>
        <h1 className="text-4xl">Instamart</h1>
        <Section 
        title={"About Instamart"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
        /*isVisible = {sectionConfig.showAbout}*/
        isVisible={visibleSection==="about"}
        // setIsVisible={()=>{
        //    setSectionConfig({
        //     showAbout:true,
        //     showteam:false,
        //    showcareers:false
        //    })
        // }}
        setIsVisible={()=> setIsVisibleSection("about")}
        />
        <Section 
        title={"Team Instamart"}
        description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"}
        /*isVisible = {sectionConfig.showteam}*/
        isVisible={visibleSection==="team"}
        // setIsVisible={()=>{
        //     setSectionConfig({
        //      showAbout:false,
        //      showteam:true,
        //     showcareers:false
        //     })
        //  }}
        setIsVisible={()=> setIsVisibleSection("team")}
        />
        <Section 
        title={"Careers"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
        /*isVisible = {sectionConfig.showcareers}*/
        isVisible={visibleSection==="careers"}
        // setIsVisible={()=>{
        //     setSectionConfig({
        //      showAbout:false,
        //      showteam:false,
        //     showcareers:true
        //     })
        //  }}
        setIsVisible={()=> setIsVisibleSection("careers")}
        />
        {/*
          <AboutInstamart/>
          <DetailsofInstamart/>
          <TeamInstamart/>
          <Product/>
          <Careers/>*/
        }
        </div>
    )
}

export default Instamart;