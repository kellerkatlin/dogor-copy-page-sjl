"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    numeroConstancia: string;
    expediente?: string;
    dni: string;
    nombreCompleto: string;
    agrupacion?: string;
    manzana?: string;
    comuna?: string;
    distrito?: string;
    departamento?: string;
    fecha: string;
    planoVigente?: string;
    medidaFrente?: number;
    medidaDerecha?: number;
    medidaIzquierda?: number;
    medidaFondo?: number;
};

export default function FormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Document>();
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const onSubmit: SubmitHandler<Inputs> = async (data: Document) => {
        console.log(data.numeroConstancia);
        if (confirm("Are you sure you want to submit?")) {
            try {
                const response = await fetch("/api/documents", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    alert("Document created");
                    router.push("/");
                } else {
                    alert("Failed to create Document");
                }
            } catch (error) {
                console.error(error);
                alert("Failed to create Document");
            }
        }
    };
    return (
        <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 ">
                    Add a new product
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="numeroConstancia"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Numero de Constancia
                            </label>
                            <input
                                type="text"
                                id="numeroConstancia"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese el número de constancia"
                                {...register("numeroConstancia", {
                                    required: true,
                                })}
                            />
                            {errors.numeroConstancia && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="expediente"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Expediente
                            </label>
                            <input
                                type="text"
                                id="expediente"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese el expediente"
                                {...register("expediente")}
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="dni"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                DNI
                            </label>
                            <input
                                type="text"
                                id="dni"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese el DNI"
                                {...register("dni", { required: true })}
                            />
                            {errors.dni && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="nombreCompleto"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese el nombre"
                                {...register("nombre", {
                                    required: true,
                                })}
                            />
                            {errors.nombre && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="nombreCompleto"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Apellido
                            </label>
                            <input
                                type="text"
                                id="apellido"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese el apellido"
                                {...register("apellido", {
                                    required: true,
                                })}
                            />
                            {errors.apellido && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="sexo"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Sexo
                            </label>
                            <input
                                type="text"
                                id="sexo"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese el apellido"
                                {...register("sexo", {
                                    required: true,
                                })}
                            />
                            {errors.sexo && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="direccion"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Direccion
                            </label>
                            <input
                                type="text"
                                id="direccion"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese la Direccion"
                                {...register("direccion", {
                                    required: true,
                                })}
                            />
                            {errors.direccion && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="fecha"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Fecha Inicio
                            </label>
                            <input
                                type="date"
                                id="fechaInicio"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                {...register("fechaInicio", { required: true })}
                            />
                            {errors.fechaInicio && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="fecha"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Fecha Fin
                            </label>
                            <input
                                type="date"
                                id="fechaFin"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                {...register("fechaFin", { required: true })}
                            />
                            {errors.fechaInicio && (
                                <span className="text-red-600">
                                    Este campo es requerido
                                </span>
                            )}
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="lote"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Medida Frente
                            </label>
                            <input
                                type="number"
                                id="medidaFrente"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese la medida del frente"
                                {...register("medidaFrente")}
                            />
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="lote"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Medida Derecha
                            </label>
                            <input
                                type="number"
                                id="medidaDerecha"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese la medida de la derecha"
                                {...register("medidaDerecha")}
                            />
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="lote"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Medicion Izquierda
                            </label>
                            <input
                                type="number"
                                id="medidaIzquierda"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese la medida de la izquierda"
                                {...register("medidaIzquierda")}
                            />
                        </div>
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="lote"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Medida Fondo
                            </label>
                            <input
                                type="number"
                                id="medidaFondo"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese la medida del fondo"
                                {...register("medidaFondo")}
                            />
                        </div>{" "}
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="areaTotal"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Area Total
                            </label>
                            <input
                                type="number"
                                id="areaTotal"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                placeholder="Ingrese la medida del fondo"
                                {...register("areaTotal")}
                            />
                        </div>
                        <div className="sm:col-span-1"></div>
                        <div className="sm:col-span-3">
                            <button
                                type="submit"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
