import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage:React.FC = () => {

   const history=useHistory()
   return (
      <div>
         About Page
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quam quod maiores consequatur voluptatibus quasi labore unde pariatur provident, ad possimus veritatis error officia quas eligendi recusandae expedita repellendus reprehenderit.
         Molestiae, doloribus eos accusamus incidunt, maxime totam tenetur facere similique blanditiis recusandae alias iusto voluptate rem quasi, soluta ab. Quis voluptate quas sit id. Tempore sunt eligendi et in similique!
         Numquam cumque, nihil veritatis ea quis cupiditate, reprehenderit aspernatur neque earum quasi sequi fuga minima. Sunt animi perferendis qui commodi provident accusantium ab nulla repudiandae, dolorem repellat repellendus cupiditate possimus.
         
         Sed doloribus nostrum mollitia iste delectus facilis enim iusto ut, fuga deserunt officiis vitae exercitationem minima unde saepe nemo repudiandae excepturi laboriosam quaerat! Consectetur corrupti eaque molestias consequatur, error ex.
         Optio recusandae perspiciatis eos deleniti sunt vero! Modi sed error rerum, laborum iure cupiditate a blanditiis quasi expedita nam, excepturi maiores impedit vero cum fugiat ratione laboriosam velit culpa eaque.
         Aliquam quibusdam quaerat laudantium repudiandae eius nobis, totam dignissimos cupiditate amet distinctio quisquam adipisci molestiae quas mollitia quo dolorem error ipsum itaque cumque enim alias tempora! Nemo officiis ea perspiciatis!</p>
         <button className="btn" onClick={()=>history.push('/')}>Back to Todos List</button>
      </div>
   )
}

 
