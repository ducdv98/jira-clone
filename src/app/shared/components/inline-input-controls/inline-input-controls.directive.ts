import {
  Directive,
  ElementRef, EventEmitter,
  Input,
  OnDestroy, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Observable, Subscription } from 'rxjs';

export interface ControlPanel {
  templateRef: TemplateRef<any>;
  readonly closed: EventEmitter<void>;
}

@Directive({
  selector: '[inlineInputControls]',
  host: {
    '(focus)': 'togglePanel()'
  }
})
export class InlineInputControlsDirective implements OnDestroy {
  private panelVisible = false;
  private overlayRef!: OverlayRef;
  private panelClosingActionsSub = Subscription.EMPTY;

  @Input('inlineInputControls') public controlPanel!: ControlPanel;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  togglePanel(): void {
   this.panelVisible ? this.destroyPanel() : this.openPanel();
  }

  openPanel(): void {
    this.panelVisible = true;
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8
          }
        ])
    });

    const templatePortal = new TemplatePortal(
      this.controlPanel.templateRef,
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);

    this.panelClosingActionsSub = this.panelClosingActions().subscribe(
      () => this.destroyPanel()
    );
  }

  private panelClosingActions(): Observable<MouseEvent | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const panelClosed = this.controlPanel.closed;

    return merge(backdropClick$, detachment$, panelClosed);
  }

  private destroyPanel(): void {
    if (!this.overlayRef || !this.panelVisible) {
      return;
    }

    this.panelClosingActionsSub.unsubscribe();
    this.panelVisible = false;
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
