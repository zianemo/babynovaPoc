<template>
  <b-container fluid>
    <b-link href="#/">Accueil</b-link>
    <div
      style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-top: .5rem; margin-bottom: .5rem;"
    ></div>
    <h2>Création d'une patiente</h2>
    <b-form @submit="onSubmit">
      <b-row>
        <b-col>
          <b-form-group
            id="firstNameGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Prénom"
          >
            <b-form-input
              id="firstName"
              v-model.trim="board.firstName"
              required
              oninvalid="this.setCustomValidity('Ce champ est requis')"
              onchange="this.setCustomValidity('')"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="lastNameGroup" horizontal :label-cols="4" breakpoint="md" label="Nom">
            <b-form-input
              id="lastName"
              v-model.trim="board.lastName"
              required
              oninvalid="this.setCustomValidity('Ce champ est requis')"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="emailGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Adresse e-mail"
          >
            <b-form-input id="email" v-model.trim="board.email"></b-form-input>
          </b-form-group>
          <b-form-group
            id="phoneGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Numéro de téléphone"
          >
            <b-form-input id="phone" v-model.trim="board.phone"></b-form-input>
          </b-form-group>
          <b-form-group
            id="MaidenNameGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nom de jeune fille"
          >
            <b-form-input id="maidenName" v-model.trim="board.maidenName"></b-form-input>
          </b-form-group>
          <b-form-group
            id="birthDateGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Date de naissance"
          >
            <b-form-input id="birthDate" v-model.trim="board.birthDate" placeholder="DD/MM/YYYY"></b-form-input>
          </b-form-group>
          <b-form-group id="adressGroup" horizontal :label-cols="4" breakpoint="md" label="Adresse">
            <b-form-textarea
              style="overflow:hidden"
              id="adress"
              v-model.trim="board.adress"
              rows="2"
              max-rows="3"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="postalCodeGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Code postal"
          >
            <b-form-input id="postalCode" v-model.trim="board.postalCode"></b-form-input>
          </b-form-group>
          <b-form-group id="cityGroup" horizontal :label-cols="4" breakpoint="md" label="Ville">
            <b-form-input id="city" v-model.trim="board.city"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="doctorGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Médecin traitant"
          >
            <b-form-input id="doctor" v-model.trim="board.doctor"></b-form-input>
          </b-form-group>
          <b-form-group
            id="gynecologistGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Gynécologue"
          >
            <b-form-input id="gynecologist" v-model.trim="board.gynecologist"></b-form-input>
          </b-form-group>
          <b-form-group
            id="socialAidGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Prise en charge sociale"
          >
            <b-form-select id="socialAid" v-model.trim="board.socialAid">
              <b-form-select-option></b-form-select-option>
              <b-form-select-option value="Mutualité chrétienne">Mutualité chrétienne</b-form-select-option>
              <b-form-select-option value="Mutualité socialiste">Mutualité socialiste</b-form-select-option>
              <b-form-select-option value="Mutualité neutre">Mutualité neutre</b-form-select-option>
              <b-form-select-option value="Mutualité libre">Mutualité libre</b-form-select-option>
              <b-form-select-option value="Mutualité neutre mutualia">Mutualité neutre mutualia</b-form-select-option>
              <b-form-select-option value="Partena">Partena</b-form-select-option>
              <b-form-select-option value="PartenaMut">PartenaMut</b-form-select-option>
              <b-form-select-option value="Solidaris">Solidaris</b-form-select-option>
              <b-form-select-option value="Symbiose">PartenaMut</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="ssinGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Numéro de sécurité sociale"
          >
            <b-form-input id="ssin" v-model.trim="board.ssin"></b-form-input>
          </b-form-group>
          <b-form-group
            id="nationalityGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nationalité"
          >
            <b-form-input id="nationality" v-model.trim="board.nationality"></b-form-input>
          </b-form-group>
          <b-form-group
            id="maritalStatusGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Etat civil"
          >
            <b-form-select id="maritalStatus" v-model.trim="board.maritalStatus">
              <b-form-select-option></b-form-select-option>
              <b-form-select-option value="Mariée">Mariée</b-form-select-option>
              <b-form-select-option value="Célibataire">Célibataire</b-form-select-option>
              <b-form-select-option value="Concubinage">Concubinage</b-form-select-option>
              <b-form-select-option value="Pacsée">Pacsée</b-form-select-option>
              <b-form-select-option value="Veuve">Veuve</b-form-select-option>
              <b-form-select-option value="Divorcée">Divorcée</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="maritalStatusOtherGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Situation familiale - autre"
          >
            <b-form-input id="maritalStatusOther" v-model.trim="board.maritalStatusOther"></b-form-input>
          </b-form-group>
          <b-form-group
            id="professionGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Profession"
          >
            <b-form-input id="profession" v-model.trim="board.profession"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <div style="border-bottom: 1px dotted rgba(0, 0, 0, 0.1);"></div>
      <b-row>
        <b-col>
          <b-form-group
            id="patientSizeGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Taille de la patiente (cm)"
          >
            <b-form-input id="patientSize" v-model.trim="generalHealthInfo.patientSize"></b-form-input>
          </b-form-group>
          <b-form-group
            id="patientWeightGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Poids (kg)"
          >
            <b-form-input id="patientWeight" v-model.trim="generalHealthInfo.patientWeight"></b-form-input>
          </b-form-group>
          <b-form-group id="imcGroup" horizontal :label-cols="4" breakpoint="md" label="IMC">
            <b-form-input id="imc" v-model.trim="generalHealthInfo.imc" hidden></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="allergyGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Allergies"
          >
            <b-form-radio
              id="allergyTrue"
              v-model.trim="generalHealthInfo.allergyBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="allergyFalse"
              v-model.trim="generalHealthInfo.allergyBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="allergyDetails"
              v-model.trim="generalHealthInfo.allergyDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="bloodGroupGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Groupe sanguin"
          >
            <b-form-select id="bloodGroup" v-model.trim="generalHealthInfo.bloodGroup">
              <b-form-select-option></b-form-select-option>
              <b-form-select-option value="A">A</b-form-select-option>
              <b-form-select-option value="B">B</b-form-select-option>
              <b-form-select-option value="AB">AB</b-form-select-option>
              <b-form-select-option value="O">O</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="rhesusGroup" horizontal :label-cols="4" breakpoint="md" label="Rhésus">
            <b-form-select id="rhesus" v-model.trim="generalHealthInfo.rhesus">
              <b-form-select-option></b-form-select-option>
              <b-form-select-option value="Positif">Positif</b-form-select-option>
              <b-form-select-option value="Négatif">Négatif</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <div style="border-bottom: 1px dotted rgba(0, 0, 0, 0.1);"></div>
      <h2>Antécédents</h2>
      <b-row>
        <b-col>
          <b-form-group
            id="medicalHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Antécédents médicaux"
          >
            <b-form-textarea
              style="overflow:hidden"
              id="medicalHistory"
              v-model.trim="medicalHistoryInfo.medicalHistory"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="chirurgicalHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Antécédents chirurgicaux"
          >
            <b-form-textarea
              style="overflow:hidden"
              id="chirurgicalHistory"
              v-model.trim="medicalHistoryInfo.chirurgicalHistory"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="transfusionHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Transfusions"
          >
            <b-form-radio
              id="transfusionHistoryBooleanFalse"
              v-model.trim="medicalHistoryInfo.transfusionHistoryBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="transfusionHistoryBooleanTrue"
              v-model.trim="medicalHistoryInfo.transfusionHistoryBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="transfusionHistoryDetails"
              v-model.trim="medicalHistoryInfo.transfusionHistoryDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <div style="border-bottom: 1px dotted rgba(0, 0, 0, 0.1);"></div>
      <h2>Antécédents familiaux</h2>
      <b-row>
        <b-col>
           <b-form-group
            id="oncologicHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Oncologiques"
          >
            <b-form-radio
              id="oncologicHistoryBooleanTrue"
              v-model.trim="familyHistoryInfo.oncologicHistoryBoolean"
              value="True"
            >Oui
            </b-form-radio>
            <b-form-radio
              id="oncologicHistoryBooleanFalse"
              v-model.trim="familyHistoryInfo.oncologicHistoryBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="oncologicHistoryDetails"
              v-model.trim="familyHistoryInfo.oncologicHistoryDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
           <b-form-group
            id="arterialHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Arteriels"
          >
            <b-form-radio
              id="arterialHistoryBooleanFalse"
              v-model.trim="familyHistoryInfo.arterialHistoryBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="arterialHistoryBooleanTrue"
              v-model.trim="familyHistoryInfo.arterialHistoryBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="arterialHistoryDetails"
              v-model.trim="familyHistoryInfo.arterialHistoryDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="venousHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Veineux"
          >
            <b-form-radio
              id="venousHistoryBooleanTrue"
              v-model.trim="familyHistoryInfo.venousHistoryBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="venousHistoryBooleanFalse"
              v-model.trim="familyHistoryInfo.venousHistoryBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="venousHistoryDetails"
              v-model.trim="familyHistoryInfo.venousHistoryDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
           <b-form-group
            id="endocrineHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Endocriniens"
          >
            <b-form-radio
              id="endocrineHistoryBooleanTrue"
              v-model.trim="familyHistoryInfo.endocrineHistoryBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="endocrineHistoryBooleanFalse"
              v-model.trim="familyHistoryInfo.endocrineHistoryBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="endocrineHistoryDetails"
              v-model.trim="familyHistoryInfo.endocrineHistoryDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="geneticHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Génétiques"
          >
            <b-form-radio
              id="geneticHistoryBooleanTrue"
              v-model.trim="familyHistoryInfo.geneticHistoryBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="geneticHistoryBooleanFalse"
              v-model.trim="familyHistoryInfo.geneticHistoryBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="geneticHistoryDetails"
              v-model.trim="familyHistoryInfo.geneticHistoryDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group
            id="familyHistoryRemarksGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Remarques"
          >
            <b-form-textarea
              style="overflow:hidden"
              id="familyHistoryRemarks"
              v-model.trim="familyHistoryInfo.familyHistoryRemarks"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <div style="border-bottom: 1px dotted rgba(0, 0, 0, 0.1);"></div>
      <h2>Antécédents gynécologiques</h2>
      <b-row>
      <b-col>
       <b-form-group
            id="gynecologicalHistoryGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Cycles réguliers"
          >
            <b-form-radio
              id="regularCycleBooleanTrue"
              v-model.trim="gynecologicalHistoryInfo.regularCycleBoolean"
              value="True"
            >Oui</b-form-radio>
            <b-form-radio
              id="regularCycleBooleanFalse"
              v-model.trim="gynecologicalHistoryInfo.regularCycleBoolean"
              value="False"
            >Non</b-form-radio>
            <b-form-textarea
              style="overflow:hidden"
              id="regularCycleDetails"
              v-model.trim="gynecologicalHistoryInfo.regularCycleDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
          <span style="font-weight: 500;">Frottis</span><span style="opacity: .5"> (ajout automatique  dans le dossier Gynécologie)</span>
             <b-form-group
            id="vaginalSwabGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Dernier frottis cervico-vaginal"
          >
            <b-form-input id="vaginalSwabDetails" v-model.trim="gynecologicalHistoryInfo.vaginalSwabDetails" placeholder="DD/MM/YYYY"></b-form-input>
          </b-form-group>
                  <b-form-group
            id="resultSwabGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Résultats frottis"
          >
            
            <b-form-textarea
              style="overflow:hidden"
              id="resultSwabDetails"
              v-model.trim="gynecologicalHistoryInfo.resultSwabDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
            id="contraceptionGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Contraception"
          >
            
            <b-form-textarea
              style="overflow:hidden"
              id="contraceptionDetails"
              v-model.trim="gynecologicalHistoryInfo.contraceptionDetails"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
                  <b-form-group
            id="gynecologicalRemarksGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Remarques"
          >
            
            <b-form-textarea
              style="overflow:hidden"
              id="gynecologicalRemarks"
              v-model.trim="gynecologicalHistoryInfo.gynecologicalRemarks"
              rows="6"
              max-rows="12"
            ></b-form-textarea>
          </b-form-group>
      </b-col>
      </b-row>
      <h2>Antécédents obstétricaux</h2>
      <b-row>
      <b-col>
                          <b-form-group
            id="gestityGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Gestité"
          >
            
            <b-form-input
              style="overflow:hidden"
              id="gestity"
              v-model.trim="gynecologicalHistoryInfo.gestity"
            ></b-form-input>
          </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
            id="parityGroup"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Parité"
          >
            
            <b-form-input
              style="overflow:hidden"
              id="gestity"
              v-model.trim="gynecologicalHistoryInfo.parity"
            ></b-form-input>
          </b-form-group>
      </b-col>
      </b-row>     
      <b-button type="submit" variant="outline-info">Confirmer</b-button>
    </b-form>
  </b-container>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddBoard",
  data() {
    return {
      ref: firebase.firestore().collection("users"),
      board: {},
      generalHealthInfo: {},
      medicalHistoryInfo: {},
      familyHistoryInfo: {},
      gynecologicalHistoryInfo: {},
      creationDate: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/")
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (
        this.generalHealthInfo.patientSize !== null &&
        this.generalHealthInfo.patientSize !== "" &&
        this.generalHealthInfo.patientWeight !== null &&
        this.generalHealthInfo.patientWeight !== ""
      ) {
        var patientWeight = parseInt(this.generalHealthInfo.patientWeight);
        var patientSize = parseInt(this.generalHealthInfo.patientSize);
        this.generalHealthInfo.imc = (
          (patientWeight / Math.pow(patientSize, 2)) *
          10000
        ).toFixed(2); //to fixed pour garder 2 décimales
      }
      const newUuid = uuidv4(); //generation d'un identifiant unique pour une patiente en db (UUID)
      this.board.uuid = newUuid; //stockage du uuid en db
      this.board.createdBy = "Administrateur"; //TODO à remplacer par le current user connecté une fois l'auth mise en place
      this.board.creationDate = this.getDate();
      this.ref
        .doc(this.board.uuid)
        .set(this.board) //génération du UUID du document
        .then(() => {
          this.ref
            .doc(this.board.uuid)
            .collection("generalHealthInfo")
            .doc(this.board.uuid)
            .set(this.generalHealthInfo); //generation et ajout de la collection generalHealthInfo
          this.ref
            .doc(this.board.uuid)
            .collection("medicalHistoryInfo")
            .doc(this.board.uuid)
            .set(this.medicalHistoryInfo); //generation et ajout de la collection medicalHistoryInfo
            
            this.ref
            .doc(this.board.uuid)
            .collection("familyHistoryInfo")
            .doc(this.board.uuid)
            .set(this.familyHistoryInfo);//generation et ajout de la collection familyHistoryInfo

          router.push({
            name: "BoardList"
          });
        })

        .catch(error => {
          alert("Error adding document: ", error);
        });
    },
    getDate() {
      const toTwoDigits = num => (num < 10 ? "0" + num : num);
      let today = new Date();
      let year = today.getFullYear();
      let month = toTwoDigits(today.getMonth() + 1);
      let day = toTwoDigits(today.getDate());
      return `${day}/${month}/${year}`;
    },
    show() {
      document.getElementById("allergyDetails").style.display = "block";
    },
    hide() {
      document.getElementById("allergyDetails").style.display = "none";
    }
  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
</style>
