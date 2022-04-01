<template>
    <form @submit.prevent="faiqualcosa">
        <label class="label">Email</label>
        <input type="email" class="input" v-model="email" required>

        <label class="label mt-10">Password</label>
        <input type="password" class="input" v-model="password" required>
        <div v-if="passwordError" class="error mt-2">{{passwordError}}</div>

        <label class="label mt-10">Role: </label>        
        <select v-model="role">
            <option value="developer">Web Dev.</option>
            <option value="designer">Web Designer</option>
        </select>

        <label class="label mt-10">Skills</label>        
        <input class="input" type="text" v-model="tempSkills" @keyup.alt="addSkill">
        <label class="ml-1 font-thin text-s text-gray-300 italic flex justify-end">(ALT + Invio per inserire - click per rimuovere)</label>
        <div v-for="skill in skills" :key="skill" class="label mt-1 ml-1 p-1 bg-zinc-600 rounded-lg cursor-pointer !text-gray-300">
            <span @click="delSkill(skill)">{{skill}}</span>
        </div>

        <div class="terms">
            <input type="checkbox" v-model="terms" require>
            <label class="label font-light ml-2 mt-8">Accettare i termini e le condizioni</label>
        </div>

        <div class=" w-full border-t border-gray-500 mt-3"></div>

        <div class="mt-2">
            <input type="checkbox" v-model="names" value="Shaun">
            <label class="label font-light ml-2">Shaun</label>
        </div>

        <div>
            <input type="checkbox" v-model="names" value="Yoshi">
            <label class="label font-light ml-2">Yoshi</label>
        </div>

        <div>
            <input type="checkbox" v-model="names" value="Luigi">
            <label class="label font-light ml-2">Luigi</label>
        </div>

        <div class="mt-5">
            <button class="btn">Invia</button>
        </div>

        <div>
            <label class="label mt-6 !italic transition-transform animate-pulse" v-if="visualizza">Dati loggati nella console</label>
        </div>

    </form>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            role: '',
            terms: false,
            names: [],
            tempSkills:'',
            skills: [],
            passwordError: '',
            visualizza: false
        }
    },
    methods: {
        addSkill(e){
            if(e.key=='Enter'&& this.tempSkills){
                if (!this.skills.includes(this.tempSkills)){
                    this.skills.push(this.tempSkills);                    
                }
                this.tempSkills = ''
            }
        },
        delSkill(skill){                        
            this.skills = this.skills.filter((item) => {
                return skill!== item
            })
        },
        faiqualcosa(){
            //valido la password
            this.passwordError = this.password.length > 5 ? '':'la password deve essere almeno 6 caratteri'
            if(!this.passwordError){
                this.visualizza = true
                console.log('Email: ',this.email)
                console.log('Password: ',this.password)
                console.log('Ruolo: ',this.role)
                console.log('Skills: ',this.skills)
                console.log('Nomi: ',this.names)
                console.log('Terms: ',this.terms)
            }
        }
    }
}
</script>