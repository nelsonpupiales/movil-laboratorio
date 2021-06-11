import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  //URL = "http://localhost:8080";

  URL = "https://rest-appi-01.herokuapp.com/api";

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
  ) { }

  async guardarEstudiante(estudiante) {
    return this.http.post(this.URL + '/estudiantes/guardarEstudiante', estudiante, { responseType: 'text' });
  }

  async loginEstudiante(usuarioEstudiante) {
    return this.http.get(`${this.URL}/estudiantes/loginEstudiante/${usuarioEstudiante}`);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  //Carga Tutor desde el localStore
  cargaIdLS(){
    let id = localStorage.getItem("accessToken");
    if (!isNullOrUndefined(id)) {     
      console.log(id)
      return id;
    } else {
      return null;
    }
  }


  //Carga Estudiante
  async cargaEstudiante(id) {
    return this.http.get(`${this.URL}/estudiantes/cargaEstudiante/${id}`);
  }



  getToken() {
    let token_string = localStorage.getItem("accessToken");    
    if (!(token_string === undefined || token_string === null)) {
      let token: String = (token_string);
      console.log(token)
      return token;
    } else {
      return null;
    }
  }



  
  //________________________________________________ Materia _______________________________________

  //Guarda una materia
  async guardarMateriaEstudiante(materiaestudiante) {
    return this.http.post(this.URL + '/materiasestudiantes/guardarMateriaEstudiante', materiaestudiante, { responseType: 'text' });
  }

  //Carga una materia con el Codigo
  async cargarCodeMateria(id){
    return this.http.get(`${this.URL}/materias/detalleCodeMateria/${id}`);
  }


   //Carga una materia con el Codigo
  async cargarMateria(id){
    return this.http.get(`${this.URL}/materias/CodeMateriaList/${id}`);
  }
  


  //Cargar lista de materias que el estudiante esta incrito desde la tabla MateriaEstudiantes
  async cargaListaMateriasEstudiantes(idEstudiante){
    return this.http.get(`${this.URL}/materiasestudiantes/cargaListaMateriasEstudiante/${idEstudiante}`);
  }


  //________________________________________________ Tema _______________________________________
  
  //Cargar Tema
  async cargarTema(idMateria){
    return this.http.get(`${this.URL}/temas/cargarTemas/${idMateria}`);
  }

  //Cargar Tema
  async cargaUnTema(idTema){
    return this.http.get(`${this.URL}/temas/cargaUnTema/${idTema}`);
  }





  //________________________________________________ Experimento _______________________________________

  //Cargar Experimento
  async cargarExperimentos(idTema){
    return this.http.get(`${this.URL}/experimentos/cargarExperimentos/${idTema}`);
  }

  //Cargar Un Experimento
  async cargarUnExperimento(idExperimento){
    return this.http.get(`${this.URL}/experimentos/cargarUnExperimento/${idExperimento}`);
  }




  //________________________________________________ Practica _______________________________________

  //Guarda practica
  async guardarExperimentoEstudiante(practica) {
    return this.http.post(this.URL + '/experimentosestudiantes/guardarExperimentoEstudiante', practica, { responseType: 'text' });
  }

  //Cargar practicas
  async cargarPracticas(idExperimento) {
    return this.http.get(`${this.URL}/experimentosestudiantes/cargarPracticas/${idExperimento}`);  
  }


   //Cargar una sola practicas
   async cargarUnaPractica(idExperimento) {
    return this.http.get(`${this.URL}/experimentosestudiantes/cargarUnaPractica/${idExperimento}`);  
  }



}
