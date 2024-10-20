import { v4 as uuidv4 } from "uuid";

export default function Component() {
    const newId = uuidv4();
    console.log(newId);
    return (
        <div className="container">
            <div id="title">
                <h3 className="text-center mt-4">
                    MUNICIPALIDAD DE SAN JUAN DE LURIGANCHO
                </h3>

                <h5 className="text-center">GERENCIA DE DESARROLLO URBANO</h5>
                <h5 className="text-center">
                    SUBGERENCIA DE PLANEAMIENTO URBANO Y CATASTRO
                </h5>
                <h3 className="text-center font-bold mb-4">
                    PARA FINES DE OTORGAMIENTO DE SERVICIOS BÁSICOS
                </h3>
                <h3 className="text-center mt-0 mb-[5px]">
                    N° 083-2024-SGPUC-GDU/MDSJL
                </h3>
                <h5 className="text-right">
                    REF.: EXPEDIENTE 221-2024 03/01/2024
                </h5>
            </div>

            <p className="mb-2">
                La Subgerencia de Planeamiento Urbano y Catastro de la
                Municipalidad de San Juan de Lurigancho, al amparo de la Ley Nº
                28687, Decreto Supremo Nº 017-2006-Vivienda y la Ordenanza N°
                439-MDSJL publicada el 26.07.23, da constancia a:
            </p>

            <p className="mb-1 mt-0">
                <strong>
                    Don HERRERA HERRERA, ARTUR FRANK, identificado con D.N.I. N°
                    70065441,{" "}
                </strong>
                se encuentra en calidad de posesionario(a) del predio ubicado en{" "}
                <strong>
                    AGRUPACIÓN FAMILIAR GRACIA CALVARY CHAPEL Mz. D Lt. 05 -
                    COMUNA 7
                </strong>
                , Distrito de San Juan de Lurigancho, Provincia y Departamento
                de Lima, según el Plano Visado para fines de Servicios Básicos
                N° 108-2010-SGHU-GDU/MDSJL, cuyas medidas y linderos
                referenciales son los siguientes:
            </p>

            <div className="pl-[35px] block pb-0 mb-1 mt-2">
                <p className="p-0 m-0">
                    Por el frente <span className="ml-8">: 5.00 ml.</span>
                </p>
                <p className="p-0 m-0">
                    Por la derecha <span className="ml-4">: 12.00 ml.</span>
                </p>
                <p className="p-0 m-0">
                    Por la izquierda <span className="ml-2">: 12.00 ml.</span>
                </p>
                <p className="p-0 m-0">
                    Por el fondo <span className="ml-9">: 5.00 ml.</span>
                </p>
                <p className="p-0 m-0">
                    Área total <span className="ml-14">: 60.00 m2.</span>
                </p>
            </div>

            <p className="pt-0 mt-2 mb-1">
                Se expide la presente Constancia de Posesión exclusivamente para
                Fines de Otorgamiento de Servicios Básicos, según Informe
                Técnico N° 56-2024-PPRI-SGPUC-GDU/MDSJL, en concordancia con el
                Art. 24 de la Ley N° 28687 &quot;Ley de desarrollo y
                complementaria de formalización de la propiedad informal, acceso
                al suelo y dotación de servicios básicos&quot;.
            </p>

            <p className="mt-2 pt-0 mb-3">
                <strong>
                    ESTE DOCUMENTO NO AUTORIZA NI REGULARIZA OBRAS DE
                    HABILITACIÓN URBANA, LOTIZACIÓN, SUBDIVISIÓN, CONSTRUCCIÓN.
                    NO CONSTITUYE RECONOCIMIENTO ALGUNO DE PROPIEDAD QUE AFECTE
                    AL TITULAR DEL PREDIO. LA PRESENTE CONSTANCIA DE POSESIÓN ES
                    EXCLUSIVA PARA LA OBTENCIÓN DE LOS SERVICIOS BÁSICOS Y
                    TENDRÁ SOLAMENTE VIGENCIA HASTA LA EFECTIVA INSTALACIÓN DE
                    LOS SERVICIOS BÁSICOS EN EL INMUEBLE.
                </strong>
            </p>

            <p className="mb-1 mt-2">
                <strong>
                    NOTA: LA PRESENTE CONSTANCIA DE POSESIÓN QUEDARÁ SIN EFECTO
                    DE EXISTIR CONFLICTOS JUDICIALES Y/O EXTRAJUDICIALES
                    RESPECTO A LA POSESIÓN DEL LOTE.
                </strong>
            </p>

            <p className="mt-2 mb-2">
                San Juan de Lurigancho, 05 de febrero del 2024
            </p>

            <p className="mt-0 mb-1">
                Este formato no presenta ningun valor legal o judicial.
            </p>
        </div>
    );
}
