class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lastName: string, patientID: number) {
    super(firstName, lastName);
    this.patientID = patientID;
  }

  PatientDetails() {
    console.log(
      `firstName${this.firstName} lastName${this.lastName} patientID${this.patientID}`
    );
  }
}

class Doctor extends Person {
  doctorID: number;
  specialization: string;

  constructor(
    firstName: string,
    lastName: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }

  DoctorDetails() {
    console.log(
      `firstName${this.firstName} lastName${this.lastName} patientID${this.doctorID} specialization${this.specialization}`
    );
  }
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  data: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, data: string, time: string) {
    this.doctor = doctor;
    this.patient = patient;
    this.data = data;
    this.time = time;
  }

  QueueDetails() {
    return {
      "Patient Details": this.patient.PatientDetails(),
      "Doctor Details": this.doctor.DoctorDetails(),
      time: this.time,
      data: this.data,
    };
  }
}

class Hospital {
  HospitalName: string;
  Patient: Patient[];
  Doctor: Doctor[];
  Appointment: Appointment[];
  constructor(HospitalName: string) {
    this.HospitalName = HospitalName;
    this.Patient = [];
    this.Doctor = [];
    this.Appointment = [];
  }

  newPatient(addPatient: Patient) {
    this.Patient.push(addPatient);
  }

  newDoctor(addDoctor: Doctor) {
    this.Doctor.push(addDoctor);
  }

  newAppointment(addAppointment: Appointment) {
    this.Appointment.push(addAppointment);
  }

  DetailsOfAllAppointments() {
    console.log(this.Appointment);
  }

  DetailsOfAllDoctorAppointmentsByID(id: number) {
    const DetailsOfAllDoctor = this.Appointment.find(
      (a) => a.doctor.doctorID === id
    );
    if (!DetailsOfAllDoctor) return Error;
    console.log(DetailsOfAllDoctor);
  }

  PatientAppointmentsByID(id: number) {
    const PatientAppointments = this.Appointment.find(
      (a) => a.patient.patientID === id
    );
    if (!PatientAppointments) return Error;
    console.log(PatientAppointments);
  }

  AllAppointmentsToday(data: string) {
    const AllAppointments = this.Appointment.find((a) => a.data === data);
    if (!data) return Error;
    console.log(data);
  }
}

const patient1 = new Patient("Smith", "Alice", 1);
const patient2 = new Patient("Johnson", "Bob", 2);
const patient3 = new Patient("Williams", "Carol", 3);

const doctor1 = new Doctor("smith", "John", 1, "Cardiology");
const doctor2 = new Doctor("Johnson", "Emily", 2, "Pediatrics");
const doctor3 = new Doctor("Williams", "Michael", 3, "Orthopedics");

const appointment1 = new Appointment(patient1, doctor1, "2021-08-27", "12:00");
const appointment2 = new Appointment(patient2, doctor2, "2023-04-27", "17:00");
const appointment3 = new Appointment(patient3, doctor3, "2023-08-23", "11:00");

const myHospital = new Hospital("Ichilov");

myHospital.newPatient(patient1);
myHospital.newDoctor(doctor1);
myHospital.newAppointment(appointment1);

myHospital.DetailsOfAllAppointments();
myHospital.DetailsOfAllDoctorAppointmentsByID(1);
myHospital.PatientAppointmentsByID(2);
myHospital.AllAppointmentsToday("15:00");
