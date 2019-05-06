/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Pet } from '../models/pet';
import { ApiResponse } from '../models/api-response';

/**
 * Everything about your Pets
 */
@Injectable({
  providedIn: 'root',
})
class PetService extends __BaseService {
  static readonly addPetPath = '/pet';
  static readonly updatePetPath = '/pet';
  static readonly findPetsByStatusPath = '/pet/findByStatus';
  static readonly findPetsByTagsPath = '/pet/findByTags';
  static readonly getPetByIdPath = '/pet/{petId}';
  static readonly updatePetWithFormPath = '/pet/{petId}';
  static readonly deletePetPath = '/pet/{petId}';
  static readonly uploadFilePath = '/pet/{petId}/uploadImage';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body Pet object that needs to be added to the store
   */
  addPetResponse(body: Pet): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/pet`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body Pet object that needs to be added to the store
   */
  addPet(body: Pet): __Observable<null> {
    return this.addPetResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body Pet object that needs to be added to the store
   */
  updatePetResponse(body: Pet): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/pet`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body Pet object that needs to be added to the store
   */
  updatePet(body: Pet): __Observable<null> {
    return this.updatePetResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Multiple status values can be provided with comma separated strings
   * @param status Status values that need to be considered for filter
   * @return successful operation
   */
  findPetsByStatusResponse(status: Array<'available' | 'pending' | 'sold'>): __Observable<__StrictHttpResponse<Array<Pet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (status || []).forEach(val => {if (val != null) __params = __params.append('status', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pet/findByStatus`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Pet>>;
      })
    );
  }
  /**
   * Multiple status values can be provided with comma separated strings
   * @param status Status values that need to be considered for filter
   * @return successful operation
   */
  findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>): __Observable<Array<Pet>> {
    return this.findPetsByStatusResponse(status).pipe(
      __map(_r => _r.body as Array<Pet>)
    );
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @param tags Tags to filter by
   * @return successful operation
   */
  findPetsByTagsResponse(tags: Array<string>): __Observable<__StrictHttpResponse<Array<Pet>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (tags || []).forEach(val => {if (val != null) __params = __params.append('tags', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pet/findByTags`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Pet>>;
      })
    );
  }
  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @param tags Tags to filter by
   * @return successful operation
   */
  findPetsByTags(tags: Array<string>): __Observable<Array<Pet>> {
    return this.findPetsByTagsResponse(tags).pipe(
      __map(_r => _r.body as Array<Pet>)
    );
  }

  /**
   * Returns a single pet
   * @param petId ID of pet to return
   * @return successful operation
   */
  getPetByIdResponse(petId: number): __Observable<__StrictHttpResponse<Pet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/pet/${petId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Pet>;
      })
    );
  }
  /**
   * Returns a single pet
   * @param petId ID of pet to return
   * @return successful operation
   */
  getPetById(petId: number): __Observable<Pet> {
    return this.getPetByIdResponse(petId).pipe(
      __map(_r => _r.body as Pet)
    );
  }

  /**
   * @param params The `PetService.UpdatePetWithFormParams` containing the following parameters:
   *
   * - `petId`: ID of pet that needs to be updated
   *
   * - `status`: Updated status of the pet
   *
   * - `name`: Updated name of the pet
   */
  updatePetWithFormResponse(params: PetService.UpdatePetWithFormParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;

   if(params.status !== null && typeof params.status !== "undefined") { __formData.append('status', params.status as string | Blob);}
   if(params.name !== null && typeof params.name !== "undefined") { __formData.append('name', params.name as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/pet/${params.petId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `PetService.UpdatePetWithFormParams` containing the following parameters:
   *
   * - `petId`: ID of pet that needs to be updated
   *
   * - `status`: Updated status of the pet
   *
   * - `name`: Updated name of the pet
   */
  updatePetWithForm(params: PetService.UpdatePetWithFormParams): __Observable<null> {
    return this.updatePetWithFormResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `PetService.DeletePetParams` containing the following parameters:
   *
   * - `petId`: Pet id to delete
   *
   * - `api_key`:
   */
  deletePetResponse(params: PetService.DeletePetParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.apiKey != null) __headers = __headers.set('api_key', params.apiKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/pet/${params.petId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `PetService.DeletePetParams` containing the following parameters:
   *
   * - `petId`: Pet id to delete
   *
   * - `api_key`:
   */
  deletePet(params: PetService.DeletePetParams): __Observable<null> {
    return this.deletePetResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `PetService.UploadFileParams` containing the following parameters:
   *
   * - `petId`: ID of pet to update
   *
   * - `file`: file to upload
   *
   * - `additionalMetadata`: Additional data to pass to server
   *
   * @return successful operation
   */
  uploadFileResponse(params: PetService.UploadFileParams): __Observable<__StrictHttpResponse<ApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;

   if(params.file !== null && typeof params.file !== "undefined") { __formData.append('file', params.file as string | Blob);}
   if(params.additionalMetadata !== null && typeof params.additionalMetadata !== "undefined") { __formData.append('additionalMetadata', params.additionalMetadata as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/pet/${params.petId}/uploadImage`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ApiResponse>;
      })
    );
  }
  /**
   * @param params The `PetService.UploadFileParams` containing the following parameters:
   *
   * - `petId`: ID of pet to update
   *
   * - `file`: file to upload
   *
   * - `additionalMetadata`: Additional data to pass to server
   *
   * @return successful operation
   */
  uploadFile(params: PetService.UploadFileParams): __Observable<ApiResponse> {
    return this.uploadFileResponse(params).pipe(
      __map(_r => _r.body as ApiResponse)
    );
  }
}

module PetService {

  /**
   * Parameters for updatePetWithForm
   */
  export interface UpdatePetWithFormParams {

    /**
     * ID of pet that needs to be updated
     */
    petId: number;

    /**
     * Updated status of the pet
     */
    status?: string;

    /**
     * Updated name of the pet
     */
    name?: string;
  }

  /**
   * Parameters for deletePet
   */
  export interface DeletePetParams {

    /**
     * Pet id to delete
     */
    petId: number;
    apiKey?: string;
  }

  /**
   * Parameters for uploadFile
   */
  export interface UploadFileParams {

    /**
     * ID of pet to update
     */
    petId: number;

    /**
     * file to upload
     */
    file?: Blob;

    /**
     * Additional data to pass to server
     */
    additionalMetadata?: string;
  }
}

export { PetService }
