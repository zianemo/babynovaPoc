<template>
  <b-container>
    <b-row>
      <b-col>
        <b-link href="#/">Accueil</b-link>
      </b-col>
      <b-col>
        <b-button v-b-toggle="'collapse-2'" class="m-1" variant="primary">Informations patiente</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>

    <div
      style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-top: .5rem; margin-bottom: .5rem;"
    ></div>

    <b-row>
      <b-col></b-col>

      <b-col></b-col>
      <b-col></b-col>
    </b-row>
    <b-collapse id="collapse-2">
      <b-row>
        <b-col>
          <b-card-group deck>
            <b-card
              border-variant="primary"
              header="Informations personnelles"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
            >
              <b-card-text>{{board.lastName}} {{board.firstName}}</b-card-text>
              <b-card-text>{{board.email}}</b-card-text>
              <b-card-text>{{board.phone}}</b-card-text>
              <b-card-text>{{board.birthDate}}</b-card-text>
              <b-card-text>{{board.adress}}</b-card-text>
              <b-card-text>{{board.profession}}</b-card-text>
              <b-card-text>Médecin: {{board.doctor}}</b-card-text>
              <b-card-text>Gynécologue: {{board.gynecologist}}</b-card-text>
              <b-card-text>Prise en charge sociale : {{board.socialAid}}</b-card-text>
              <b-card-text>Numéro de sécurité sociale : {{board.ssin}}</b-card-text>
              <b-card-text>Nationalité: {{board.nationality}}</b-card-text>
              <b-card-text>Etat civil: {{board.maritalStatus}}</b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col>
          <b-card-group deck>
            <b-card
              border-variant="secondary"
              header="Informations générales"
              header-bg-variant="secondary"
              header-text-variant="white"
              align="center"
            >
              <b-card-text></b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col>
          <b-card-group deck>
            <b-card
              border-variant="warning"
              header="Conjoint"
              header-bg-variant="warning"
              header-text-variant="white"
              align="center"
            >
              <b-card-text></b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-collapse>
    <b-row>
      <b-col>
        <h2>{{board.lastName}} {{board.firstName}}</h2>
        <span style="opacity: .5">crée par {{board.createdBy}}</span>
      </b-col>
      <b-col>
        <span>{{board.birthDate}},{{board.adress}},{{board.postalCode}} {{board.city}}-{{board.phone}}-{{board.city}}</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card
            border-variant="danger"
            header="Allergies"
            header-bg-variant="danger"
            header-text-variant="black"
            align="center"
          >
            <b-card-text>{{generalHealthInfo.allergyDetails}}</b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col>
        <b-card-group deck>
          <b-card
            border-variant="Light"
            header="Mémo"
            header-bg-variant="Light"
            header-text-variant="black"
            align="center"
          >
            <b-card-text></b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col></b-col>
    </b-row>
    <h2>Antécédents obstétricaux</h2>
    <b-table striped hover stacked="md" :items="birthHistories" :fields="fields">
  <template v-slot:cell(newBorn)="birthHistories">
        {{birthHistories.item.newBornSex}}
        <br />
        {{birthHistories.item.newBornFirstName}}
        <br />
        {{birthHistories.item.newBornLastName}}
        <br />

        {{birthHistories.item.newBornWeight}}
        <br />
        {{birthHistories.item.newBornHealth}}
        <br />
      </template>
  
  
    </b-table>
    <span></span>

    
  
    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card
            border-variant="Light"
            header="Antécédents médicaux"
            header-bg-variant="Light"
            header-text-variant="black"
            align="center"
          >
            <b-card-text>{{medicalHistoryInfo.medicalHistory}}</b-card-text>
          </b-card>
        </b-card-group>
<br />
        <b-card-group deck>
          <b-card
            border-variant="warning"
            header="Antécédents familiaux"
            header-bg-variant="light"
            header-text-variant="black"
            align="center"
          >
            <b-card-text></b-card-text>
          </b-card>
        </b-card-group>
      </b-col>

      <b-col>
        <b-card-group deck>
          <b-card
            border-variant="info"
            header="Antécédents chirurgicaux"
            header-bg-variant="light"
            header-text-variant="black"
            align="center"
          >
            <b-card-text>{{medicalHistoryInfo.chirurgicalHistory}}</b-card-text>
          </b-card>
        </b-card-group>
<br />
        <b-card-group deck>
          <b-card
            border-variant="success"
            header="Antécédents gynécologiques"
            header-bg-variant="light"
            header-text-variant="black"
            align="center"
          >
            <b-card-text></b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
<br />
    <template slot="header">{{board.lastName}}</template>
    <template slot="lead">
      Name: {{board.lastName}}
      <br />
      FirstName: {{board.firstName}}
      <br />
    </template>
    <hr class="my-4" />
    <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Edit</b-btn>
    <b-btn variant="danger" @click.stop="deleteboard(key)">Delete</b-btn>
  </b-container>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "ShowBoard",
  data() {
    return {
            fields: [
        {
          key: "obstericalDate",
          label: "Date",
          sortable: false,
          class: "text-left"
        },
        { key: "obstericalTerm", label: "Terme", sortable: false, class: "text-left" },
        {
          key: "pregnancy",
          label: "Grossesse",
          sortable: false,
          class: "text-left"
        },
        {
          key: "place",
          label: "Lieu",
          sortable: false,
          class: "text-left"
        },
        {
          key: "patientLife",
          label: "Vécu de la patiente",
          sortable: false,
          class: "text-left"
        },
        {
          key: "birthMode",
          label: "Mode d'accouchement",
          sortable: false,
          class: "text-left"
        },
        {
          key: "newBorn",
          label: "Nouveau né",
          sortable: false,
          class: "text-left"
        },
        {
          key: "breastfeeding",
          label: "Allaitement",
          sortable: false,
          class: "text-left"
        }
        
      ],
      birthHistories: [],
      newBornHistories: [],
      errors: [],
      refBirthHistories: firebase.firestore().collection("users").doc(this.$route.params.id).collection("obstetricalHistoryInfo"),
      
      key: "",
      board: {}, //ne pas oublier d'ajouter les autres collections
      generalHealthInfo: {},
      medicalHistoryInfo: {},
      familyHistoryInfo: {}
    };
  },
  created() {
    const ref = firebase
      .firestore()
      .collection("users")
      .doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
    //remplissage sous collection generalHealthInfo from db firebase to object 
    const refGeneralHealthInfo = firebase
      .firestore()
      .collection("users")
      .doc(this.$route.params.id)
      .collection("generalHealthInfo")
      .doc(this.$route.params.id);
    refGeneralHealthInfo.get().then(doc => {
      if (doc.exists) {
        this.generalHealthInfo = doc.data();
      } else {
        alert("No such document!");
      }
    });
//remplissage sous collection medicalHistoryInfo from db firebase to object 
    const refMedicalHistoryInfo = firebase
      .firestore()
      .collection("users")
      .doc(this.$route.params.id)
      .collection("medicalHistoryInfo")
      .doc(this.$route.params.id);
    refMedicalHistoryInfo.get().then(doc => {
      if (doc.exists) {
        this.medicalHistoryInfo = doc.data();
      } else {
        alert("No such document!");
      }
    });
      this.refBirthHistories.onSnapshot(querySnapshot => {
      this.birthHistories = [];
      querySnapshot.forEach(doc => {
        this.birthHistories.push({
          key: doc.id,
          obstericalDate: doc.data().obstericalDate,
          obstericalTerm: doc.data().obstericalTerm,
          pregnancy: doc.data().pregnancy,
          place: doc.data().place,
          patientLife: doc.data().patientLife,
          breastfeeding: doc.data().breastfeeding,
          newBornSex: doc.data().newBornSex,
          newBornFirstName: doc.data().newBornFirstName,
          newBornLastName: doc.data().newBornLastName,
          newBornWeight: doc.data().newBornWeight,
          newBornHealth: doc.data().newBornHealth,

        })
     
        

      });
      
    });
    
    
    
  },
  methods: {
    editboard(id) {
      router.push({
        name: "EditBoard",
        params: { id: id }
      });
    },
    deleteboard(id) {
      firebase
        .firestore()
        .collection("users")
        .doc(id)
        .delete()
        .then(() => {
          router.push({
            name: "BoardList"
          });
        })
        .catch(error => {
          alert("Error removing document: ", error);
        });
    },
    getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    alert(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

  }
};
</script>

<style>
.jumbotron {
  padding: 2rem;
}
.edit-btn {
  margin-right: 20px;
  width: 70px;
}
</style>
