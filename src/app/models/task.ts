export interface Task {
  id?: string;
  name?: string;

  role?: string;
  position?: string;
  salary?: string;
  location?: string;
  lineManager?: string;

  projectName?: string;
  projectDuration?: string;
  projectDescription?: string;

  technicalSkills?: string;
  softSkills?: string;
  languages?: string;
}