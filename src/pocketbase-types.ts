/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Aliment = "aliment",
	Conseil = "conseil",
	ProduitSponsorise = "produit_sponsorise",
	Recette = "recette",
	Regime = "regime",
	SuiviUtilisateur = "suivi_utilisateur",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type IsoAutoDateString = string & { readonly autodate: unique symbol }
export type RecordIdString = string
export type FileNameString = string & { readonly filename: unique symbol }
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated: IsoAutoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated: IsoAutoDateString
}

export type MfasRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	method: string
	recordRef: string
	updated: IsoAutoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated: IsoAutoDateString
}

export type SuperusersRecord = {
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

export type AlimentRecord = {
	auteur_id: RecordIdString
	calories_100g: number
	created: IsoAutoDateString
	fibres?: number
	glucides?: number
	id: string
	image?: FileNameString
	lipides?: number
	nom: string
	proteines?: number
	updated: IsoAutoDateString
}

export enum ConseilStatutOptions {
	"draft" = "draft",
	"publie" = "publie",
	"archive" = "archive",
}
export type ConseilRecord = {
	auteur_id: RecordIdString
	contenu: HTMLString
	created: IsoAutoDateString
	date_publication?: IsoDateString
	id: string
	statut: ConseilStatutOptions
	titre: string
	updated: IsoAutoDateString
}

export type ProduitSponsoriseRecord = {
	description?: string
	id: string
	image?: FileNameString
	lien_affiliation?: string
	nom: string
	prix?: string
}

export enum RecetteCategorieOptions {
	"Petit-déjeuner" = "Petit-déjeuner",
	"Déjeuner" = "Déjeuner",
	"Dîner" = "Dîner",
	"Collation" = "Collation",
	"Dessert" = "Dessert",
	"Sauce & Condiment" = "Sauce & Condiment",
}

export enum RecetteRegimeOptions {
	"Sans gluten" = "Sans gluten",
	"Végétarien" = "Végétarien",
	"Vegan" = "Vegan",
	"Keto" = "Keto",
	"Paléo" = "Paléo",
	"Méditerranéen" = "Méditerranéen",
}

export enum RecetteObjectifOptions {
	"Perte de poids" = "Perte de poids",
	"Prise de muscle" = "Prise de muscle",
	"Maintien du poids" = "Maintien du poids",
	"Santé générale" = "Santé générale",
	"Détox" = "Détox",
	"Énergie" = "Énergie",
	"Performance sportive" = "Performance sportive",
}

export enum RecetteStatutOptions {
	"draft" = "draft",
	"approuve" = "approuve",
	"rejete" = "rejete",
}

export enum RecetteDifficulteOptions {
	"Facile" = "Facile",
	"Moyen" = "Moyen",
	"Difficile" = "Difficile",
}
export type RecetteRecord<Tingredients = unknown> = {
	auteur_id: RecordIdString
	calories_par_part?: number
	categorie?: RecetteCategorieOptions
	description?: string
	difficulte?: RecetteDifficulteOptions
	favoris?: RecordIdString
	id: string
	image?: FileNameString
	ingredients?: null | Tingredients
	instructions?: HTMLString
	nb_parts?: number
	nom: string
	objectif?: RecetteObjectifOptions
	regime?: RecetteRegimeOptions
	statut: RecetteStatutOptions
	temps_cuisson?: number
	temps_preparation?: number
}

export type RegimeRecord<Tbenefices = unknown> = {
	benefices?: null | Tbenefices
	created: IsoAutoDateString
	description: HTMLString
	id: string
	image?: FileNameString
	nom: string
	updated: IsoAutoDateString
}

export type SuiviUtilisateurRecord = {
	created: IsoAutoDateString
	date_suivi?: IsoDateString
	id: string
	notes?: HTMLString
	poids?: number
	taille_cm?: number
	updated: IsoAutoDateString
	utilisateur_id: RecordIdString
}

export enum UsersSexeOptions {
	"Homme" = "Homme",
	"Femme" = "Femme",
	"Autre" = "Autre",
}

export enum UsersRoleOptions {
	"utilisateur" = "utilisateur",
	"pro" = "pro",
	"admin" = "admin",
}
export type UsersRecord = {
	age?: number
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	nom: string
	password: string
	prenom: string
	role: UsersRoleOptions
	sexe?: UsersSexeOptions
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type AlimentResponse<Texpand = unknown> = Required<AlimentRecord> & BaseSystemFields<Texpand>
export type ConseilResponse<Texpand = unknown> = Required<ConseilRecord> & BaseSystemFields<Texpand>
export type ProduitSponsoriseResponse<Texpand = unknown> = Required<ProduitSponsoriseRecord> & BaseSystemFields<Texpand>
export type RecetteResponse<Tingredients = unknown, Texpand = unknown> = Required<RecetteRecord<Tingredients>> & BaseSystemFields<Texpand>
export type RegimeResponse<Tbenefices = unknown, Texpand = unknown> = Required<RegimeRecord<Tbenefices>> & BaseSystemFields<Texpand>
export type SuiviUtilisateurResponse<Texpand = unknown> = Required<SuiviUtilisateurRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	aliment: AlimentRecord
	conseil: ConseilRecord
	produit_sponsorise: ProduitSponsoriseRecord
	recette: RecetteRecord
	regime: RegimeRecord
	suivi_utilisateur: SuiviUtilisateurRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	aliment: AlimentResponse
	conseil: ConseilResponse
	produit_sponsorise: ProduitSponsoriseResponse
	recette: RecetteResponse
	regime: RegimeResponse
	suivi_utilisateur: SuiviUtilisateurResponse
	users: UsersResponse
}

// Utility types for create/update operations

type ProcessCreateAndUpdateFields<T> = Omit<{
	// Omit AutoDate fields
	[K in keyof T as Extract<T[K], IsoAutoDateString> extends never ? K : never]: 
		// Convert FileNameString to File
		T[K] extends infer U ? 
			U extends (FileNameString | FileNameString[]) ? 
				U extends any[] ? File[] : File 
			: U
		: never
}, 'id'>

// Create type for Auth collections
export type CreateAuth<T> = {
	id?: RecordIdString
	email: string
	emailVisibility?: boolean
	password: string
	passwordConfirm: string
	verified?: boolean
} & ProcessCreateAndUpdateFields<T>

// Create type for Base collections
export type CreateBase<T> = {
	id?: RecordIdString
} & ProcessCreateAndUpdateFields<T>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof AuthSystemFields>
> & {
	email?: string
	emailVisibility?: boolean
	oldPassword?: string
	password?: string
	passwordConfirm?: string
	verified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof BaseSystemFields>
>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? CreateAuth<CollectionRecords[T]>
		: CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? UpdateAuth<CollectionRecords[T]>
		: UpdateBase<CollectionRecords[T]>

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
	collection<T extends keyof CollectionResponses>(
		idOrName: T
	): RecordService<CollectionResponses[T]>
} & PocketBase
