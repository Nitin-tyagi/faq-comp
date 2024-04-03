import FaqItem from "./FaqItem";

const FaqComp=()=>{
    const faqs=[
        {
            question:"Internet banking means",
            answer:"Banking from internet"
        },
        {
            question:"website is a collection of ",
            answer:"HTML documents"
        },
        {
            question:"Address of a website is called an ",
            answer:"URL"
        },
    ]
    return(<>
   {
    faqs.map((faq,index)=>{
        return (<FaqItem faq={faq} index={index}/>)
    })
   }
   </>
    )
}

export default FaqComp;