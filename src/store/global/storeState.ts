import { create } from 'zustand'

interface IinitialState {
    isLogin : boolean,
    loginPerson: {
        id: number,
        nombre: string,
        password:string,
        tareas :[{
            id?:number,
            proyectoId?:number,
            nombre?:string,
            prioridad?: number,
            estado?:number,
            destino?:number,
            origen?:number,
            notas?:string,
        }]
    }
}


export const useGlobalstate = create<IinitialState>()( (set,get) => (
    {
        isLogin :false,
        loginPerson: {
            id:0,
            nombre: "",
            password:"",
            tareas :[{             
            }]
        },
        inSystem: () =>{ 
            set({isLogin:true})
        }
    }
))