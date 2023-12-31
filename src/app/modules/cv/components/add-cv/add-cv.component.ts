import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { CvService } from '../../services/cv.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css',
})
export class AddCvComponent {
  form: FormGroup;
  id$: Observable<number>;
  cv$: Observable<Cv>;
  ngOnInit(): void {
    console.log('heyyyyyyyyyyyy');
    this.id$ = this.activatedRoute.params.pipe(map((params) => params['id']));

    this.cv$ = this.id$.pipe(
      switchMap((id) =>
        id
          ? this.cvService.getCvById(id).pipe(map((c) => (c ? c : new Cv())))
          : of(new Cv())
      )
    );

    this.cv$.subscribe((cv: Cv) => {
      console.log('aatini el cv baliz ');
      console.log(cv);
      this.createForm(cv);
    });
  }
  private createForm(cv: Cv): void {
    this.form = new FormGroup({
      firstname: new FormControl(cv.firstname, [Validators.required]),
      name: new FormControl(cv.name),
      cin: new FormControl(cv.cin, [
        Validators.required,
        Validators.minLength(8),
      ]),
      path: new FormControl(cv.path),
      age: new FormControl(cv.age, [Validators.required, Validators.min(18)]),
      job: new FormControl(cv.job, [Validators.required]),
    });
  }

  constructor(
    private toastService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}
  onFormSubmit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          console.log('in the switch map');
          const id = params['id'];
          return id
            ? this.cvService.updateCv({ id, ...this.form.value }).pipe(
                tap(() => {
                  this.toastService.success('Cv updated successfully');
                  this.router.navigate(['cv', id]);
                })
              )
            : this.cvService.addCv(this.form.value).pipe(
                tap(() => {
                  this.toastService.success('Cv added successfully');
                  this.form.reset();
                  this.router.navigate(['']);
                }),
                catchError((err) => {
                  console.log(err);
                  throw err;
                })
              );
        })
      )
      .subscribe();
  }

  @HostListener('window:beforeunload')
  canDeactivate() {
    return this.form.dirty
      ? window.confirm('You have unsaved changes. Do you really want to leave?')
      : true;
  }
}
