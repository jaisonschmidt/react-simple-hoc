import React from 'react';

const WithLoading = Component => {
    return ( { isLoadingComponent } ) => {
        return isLoadingComponent
        ? <Component isLoadingComponent={isLoadingComponent} />
        : <div>Carregando...</div>
    }
}

export default WithLoading;