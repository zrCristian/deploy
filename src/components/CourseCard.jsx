import { cursos } from "../logic/cursos-trading.js"


export function CourseCard() {
    const { analisisTecnico, bolsa } = cursos




    return (
        <>
            <section>
                <h2 className="mx-4 pt-8 text-4xl font-bold text-purple-200" >Analisis Tecnico</h2>
                <div className="grid grid-cols-mobile sm:grid-cols-laptop md:grid-cols-desktop place-content-center gap-5 m-5">
                {
                    analisisTecnico.map( curso =>
                        <article className="hover:scale-105 transition-transform bg-slate-500 rounded-md"
                        key={curso.id}>
                            
                            <a className="" target="_blank" rel="noreferrer" href= {curso.URL} >
                                <div className="">
                                    <img  className="w-full rounded-t-md" src={curso.image} alt="" />
                                </div>
                                <div className="py-2 px-4">
                                    <h3 className="text-lg mt-1">{curso.title}</h3>
                                    <h4 className="font-semibold my-2">{curso.creator}</h4>
                                </div>
                                
                            </a>
                        </article>
                    )
                }
                </div>


            </section>


            <section className="mb-11">   
                <h2 className="mx-4 pt-8 text-4xl font-bold text-purple-200" >Bolsa de Valores</h2>
                <div className="grid grid-cols-mobile sm:grid-cols-laptop md:grid-cols-desktop place-content-center gap-5 m-5">
                {
                    bolsa.map( curso =>
                        <article className="hover:scale-105 transition-transform bg-slate-500 rounded-md"
                        key={curso.id}>
                            <a className="" target="_blank" rel="noreferrer" href= {curso.URL} >
                                <div className="">
                                    <img  className="w-full rounded-t-md" src={curso.image} alt="" />
                                </div>
                                <div className="py-2 px-4">
                                    <h3 className="text-lg mt-1">{curso.title}</h3>
                                    <h4 className="font-semibold my-2">{curso.creator}</h4>
                                </div>
                                
                            </a>
                        </article>
                    )
                }
                </div>

            </section>
        </>
        
    )
}








            

