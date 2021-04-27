import { loadingService } from '../loadingService';

const loadingOverlay = document.getElementById('loading-overlay');

loadingService.loadingStatus$.subscribe((loading) => {
  console.log(loading);
  if (loading) {
    loadingOverlay.classList.add('open');
  } else {
    loadingOverlay.classList.remove('open');
  }
});

loadingService.showLoading();
setTimeout(() => loadingService.hideLoading(), 4000);
