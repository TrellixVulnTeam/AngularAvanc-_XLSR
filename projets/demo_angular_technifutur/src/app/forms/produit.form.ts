import { AbstractControl, ValidationErrors, Validators } from "@angular/forms"

export const PRODUIT_INSERT_FORM = {
    'marqueproduit' : ['',[Validators.required, Validators.minLength(2),Validators.maxLength(30)]],
    'prixproduit' : [0, [Validators.required, Validators.min(0)]],
    'modeleproduit' : [undefined, [Validators.minLength(1),Validators.maxLength(30)]],
    'stockproduit' : [1, [Validators.min(0), Validators.max(99), pair]]
}

function pair(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value % 2 == 0) 
        return null;

    return {pair:{'message': 'devrait être pair'}}
}

export function priceDoubleStock(control: AbstractControl) : ValidationErrors | null {
    const prix = control.value.prixproduit;
    const stock = control.value.stockproduit;

    if (prix >= 2*stock)
        return null;

    return {priceDoubleStock: {
        prix: prix,
        stock: stock,
        message: 'Le prix devrait être le double du stock'}
    }
}

export function deuxLettresMarque(control: AbstractControl) : ValidationErrors | null {
    const modele = control.value.modeleproduit;
    const marque = control.value.marqueproduit;

    if (modele.value.beginswith(marque.value.slice(0, 2)))
        return null;

    return {deuxLettresMarque: {
        modele: modele,
        marque: marque,
        message: 'Le modèle devrait commencer avec les deux premières lettres de la marque'}
    }
}
