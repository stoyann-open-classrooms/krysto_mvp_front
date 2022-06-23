import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import trocReducer from "../features/trocs/trocSlice";
import trocCategorieReducer from "../features/trocCategories/trocCategorieSlice";
import plasticTypeReducer from "../features/plasticTypes/plasticTypeSlice";
import recyclableProductReducer from "../features/recyclableProducts/recyclableProductSlice";
import krystoProductReducer from "../features/krystoProducts/krystoProductSlice";
import krystoProductCategorieReducer from "../features/krystoProductCategories/krystoProductCategorieSlice";
import methodeFabricationReducer from "../features/MethodeFabrications/methodeFabricationSlice";
import offreReducer from "../features/offres/offreSlice";
import offreCategorieReducer from "../features/offreCategories/offreCategorieSlice";
import partenaireReducer from "../features/partenaires/partenaireSlice";
import profilReducer from "../features/profils/profilSlice";
import villeReducer from "../features/villes/villeSlice";
import recolteReducer from "../features/recoltes/recolteSlice";
import transactionReducer from "../features/transactions/transactionSlice";
import transactionOffreReducer from "../features/transactionOffres/transactionOffreSlice";
import trocTransactionReducer from "../features/trocTransactions/trocTransactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trocs: trocReducer,
    trocCategories: trocCategorieReducer,
    plasticTypes: plasticTypeReducer,
    recyclableProducts: recyclableProductReducer,
    krystoProducts: krystoProductReducer,
    krystoProductCategories: krystoProductCategorieReducer,
    methodeFabrications: methodeFabricationReducer,
    offres: offreReducer,
    offreCategories: offreCategorieReducer,
    partenaires: partenaireReducer,
    profils: profilReducer,
    villes: villeReducer,
    recoltes: recolteReducer,
    transactions: transactionReducer,
    transactionOffres: transactionOffreReducer,
    trocTransactions: trocTransactionReducer,
  },
});
