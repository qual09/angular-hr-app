export interface Recruitment {
  id?: string;
  dateCreated?: string;
  dateUpdated?: string;
  status?: string;

  role?: string;
  position?: string;
  salary?: string;
  location?: string;
  manager?: string;

  projectName?: string;
  projectDuration?: string;
  projectDescription?: string;

  technicalSkills?: string;
  softSkills?: string;
  languages?: string;
}