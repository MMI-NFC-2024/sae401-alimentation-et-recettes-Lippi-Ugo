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
	CategorieRecette = "categorie_recette",
	ComposerQuantite = "composer_quantite",
	Conseil = "conseil",
	ConseilDestinataire = "conseil_destinataire",
	Favoris = "favoris",
	ObjectifNutritionnel = "objectif_nutritionnel",
	ProduitSponsorise = "produit_sponsorise",
	Recette = "recette",
	RecetteCategorie = "recette_categorie",
	RecetteProduitRecommande = "recette_produit_recommande",
	RecetteRegimeCompatible = "recette_regime_compatible",
	Regime = "regime",
	RegimeAlimentaire = "regime_alimentaire",
	SuiviObjectif = "suivi_objectif",
	SuiviRecette = "suivi_recette",
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

export type CategorieRecetteRecord = {
	created: IsoAutoDateString
	id: string
	nom: string
	updated: IsoAutoDateString
}

export enum ComposerQuantiteUniteOptions {
	"g" = "g",
	"ml" = "ml",
	"cs" = "cs",
	"cc" = "cc",
	"piece" = "piece",
}
export type ComposerQuantiteRecord = {
	aliment_id: RecordIdString
	created: IsoAutoDateString
	id: string
	quantite: number
	recette_id: RecordIdString
	unite: ComposerQuantiteUniteOptions
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

export type ConseilDestinataireRecord = {
	conseil_id: RecordIdString
	created: IsoAutoDateString
	id: string
	updated: IsoAutoDateString
	utilisateur_id: RecordIdString
}

export type FavorisRecord = {
	created: IsoAutoDateString
	date_ajout?: IsoDateString
	id: string
	recette_id: RecordIdString
	updated: IsoAutoDateString
	utilisateur_id: RecordIdString
}

export type ObjectifNutritionnelRecord = {
	created: IsoAutoDateString
	id: string
	nom: string
	updated: IsoAutoDateString
}

export type ProduitSponsoriseRecord = {
	created: IsoAutoDateString
	description?: string
	id: string
	image?: FileNameString
	lien_affiliation?: string
	nom: string
	prix?: string
	updated: IsoAutoDateString
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
	created: IsoAutoDateString
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
	updated: IsoAutoDateString
}

export type RecetteCategorieRecord = {
	categorie_id: RecordIdString
	created: IsoAutoDateString
	id: string
	recette_id: RecordIdString
	updated: IsoAutoDateString
}

export type RecetteProduitRecommandeRecord = {
	created: IsoAutoDateString
	id: string
	produit_id: RecordIdString
	recette_id: RecordIdString
	updated: IsoAutoDateString
}

export type RecetteRegimeCompatibleRecord = {
	created: IsoAutoDateString
	id: string
	recette_id: RecordIdString
	regime_id: RecordIdString
	updated: IsoAutoDateString
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

export type RegimeAlimentaireRecord = {
	created: IsoAutoDateString
	id: string
	nom: string
	updated: IsoAutoDateString
}

export type SuiviObjectifRecord = {
	created: IsoAutoDateString
	id: string
	objectif_id: RecordIdString
	suivi_id: RecordIdString
	updated: IsoAutoDateString
}

export type SuiviRecetteRecord = {
	created: IsoAutoDateString
	id: string
	recette_id: RecordIdString
	suivi_id: RecordIdString
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
export type CategorieRecetteResponse<Texpand = unknown> = Required<CategorieRecetteRecord> & BaseSystemFields<Texpand>
export type ComposerQuantiteResponse<Texpand = unknown> = Required<ComposerQuantiteRecord> & BaseSystemFields<Texpand>
export type ConseilResponse<Texpand = unknown> = Required<ConseilRecord> & BaseSystemFields<Texpand>
export type ConseilDestinataireResponse<Texpand = unknown> = Required<ConseilDestinataireRecord> & BaseSystemFields<Texpand>
export type FavorisResponse<Texpand = unknown> = Required<FavorisRecord> & BaseSystemFields<Texpand>
export type ObjectifNutritionnelResponse<Texpand = unknown> = Required<ObjectifNutritionnelRecord> & BaseSystemFields<Texpand>
export type ProduitSponsoriseResponse<Texpand = unknown> = Required<ProduitSponsoriseRecord> & BaseSystemFields<Texpand>
export type RecetteResponse<Tingredients = unknown, Texpand = unknown> = Required<RecetteRecord<Tingredients>> & BaseSystemFields<Texpand>
export type RecetteCategorieResponse<Texpand = unknown> = Required<RecetteCategorieRecord> & BaseSystemFields<Texpand>
export type RecetteProduitRecommandeResponse<Texpand = unknown> = Required<RecetteProduitRecommandeRecord> & BaseSystemFields<Texpand>
export type RecetteRegimeCompatibleResponse<Texpand = unknown> = Required<RecetteRegimeCompatibleRecord> & BaseSystemFields<Texpand>
export type RegimeResponse<Tbenefices = unknown, Texpand = unknown> = Required<RegimeRecord<Tbenefices>> & BaseSystemFields<Texpand>
export type RegimeAlimentaireResponse<Texpand = unknown> = Required<RegimeAlimentaireRecord> & BaseSystemFields<Texpand>
export type SuiviObjectifResponse<Texpand = unknown> = Required<SuiviObjectifRecord> & BaseSystemFields<Texpand>
export type SuiviRecetteResponse<Texpand = unknown> = Required<SuiviRecetteRecord> & BaseSystemFields<Texpand>
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
	categorie_recette: CategorieRecetteRecord
	composer_quantite: ComposerQuantiteRecord
	conseil: ConseilRecord
	conseil_destinataire: ConseilDestinataireRecord
	favoris: FavorisRecord
	objectif_nutritionnel: ObjectifNutritionnelRecord
	produit_sponsorise: ProduitSponsoriseRecord
	recette: RecetteRecord
	recette_categorie: RecetteCategorieRecord
	recette_produit_recommande: RecetteProduitRecommandeRecord
	recette_regime_compatible: RecetteRegimeCompatibleRecord
	regime: RegimeRecord
	regime_alimentaire: RegimeAlimentaireRecord
	suivi_objectif: SuiviObjectifRecord
	suivi_recette: SuiviRecetteRecord
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
	categorie_recette: CategorieRecetteResponse
	composer_quantite: ComposerQuantiteResponse
	conseil: ConseilResponse
	conseil_destinataire: ConseilDestinataireResponse
	favoris: FavorisResponse
	objectif_nutritionnel: ObjectifNutritionnelResponse
	produit_sponsorise: ProduitSponsoriseResponse
	recette: RecetteResponse
	recette_categorie: RecetteCategorieResponse
	recette_produit_recommande: RecetteProduitRecommandeResponse
	recette_regime_compatible: RecetteRegimeCompatibleResponse
	regime: RegimeResponse
	regime_alimentaire: RegimeAlimentaireResponse
	suivi_objectif: SuiviObjectifResponse
	suivi_recette: SuiviRecetteResponse
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
