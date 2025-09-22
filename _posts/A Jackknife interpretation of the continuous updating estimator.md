---
title: Donald and Newey (2000)
tags:
  - GMM
---
# 1. Introduction
Let $g(z,\beta)$ be an $r\times 1$ vector of functions of a data observation $z$ and $q\times 1$ parameter vector $\beta$ satisfying the moment condition
$$E[g(z,\beta_0)]=0$$
Let $z_i$ denote the observations and $g_i(\beta)=g(z_i,\beta)$. The sample first and second moments of the $g$ are given by:
$$ \hat g(\beta)=\frac{1}{n}\sum_{i=1}^1g_i(\beta)$$
$$\hat\Omega(\beta)=\frac{1}{n}\sum_{i=1}^ng_i(\beta)g_i(\beta)'$$
Here we begin with the case of no autocorrelation, where $\hat\Omega(\beta)$ estimates $Var(\sqrt n \hat g(\beta_0))$. The CUE is obtained as the solution to a minimization problem as follows:
$$\hat\beta=\arg\min_{\beta\in\mathcal B}\hat g(\beta)'\hat\Omega(\beta)^{-1}\hat g(\beta) \quad \cdots\quad(1)$$
Assuming that the minimum occurs at an interior point, $\hat\beta$ will have a first order condition obtained by differentiating the objective function and setting it equal to zero.

Assuming that $\beta$ is a scalar, and using well known results on derivatives of inverse matrices, this foc is:
$$0=\hat G'\hat\Omega^{-1}\hat g-\hat g'\hat\Omega^{-1}\hat\Lambda\hat\Omega^{-1}\hat g \quad \cdots\quad (2)$$
where $\hat g=\hat g(\hat\beta)$ whose $i$th element is denoted by $\hat g_i=g(z_i,\hat\beta)$, $\hat\Omega = \hat\Omega(\hat\beta)$, $\hat G = \partial \hat g(\hat\beta)/\partial \beta$ whose $i$th element is denoted by $\hat g_{\beta i} = \partial g(z_i,\hat\beta)/\partial\beta$ and $\hat\Lambda=\sum_{i=1}^n \hat g_i\hat g_{\beta i}'/n$. 

In deriving this expression we have used the fact that $\partial\hat\Omega(\hat\beta)\partial\beta=\hat\Lambda+\hat\Lambda'$.
When $\beta$ is a vector, then the expression in (2) is a valid expression of the foc for a single element of $\beta$ where the terms $\hat G$ and $\hat\Lambda$ would involve derivatives for a particular element of the $\beta$ vector.

Let $\hat B=\hat\Omega^{-1}\hat\Lambda$ denote the matrix of coefficients from the multivariate regression of $\hat g_{\beta i}$ on $\hat g_i$, and $\hat U_i=\hat g_{\beta i}-\hat B'\hat g_i$ the vector of associated residuals.

By the usual orthogonality property of LS residuals, $\sum_{i=1}^n\hat U_i\hat g_i'/n=0$.

Collecting terms, we can rewrite the foc as:
$$0=(\hat G-\hat B'\hat g)'\hat\Omega^{-1}\hat g = (\frac{1}{n}\sum_{i=1}^n \hat U_i)'\hat\Omega^{-1}\hat g$$
$$=\frac{1}{n^2}\sum_{i=1}^n\sum_{j=1}^n\hat U_j'\hat\Omega^{-1}\hat g_i = \frac{1}{n^2}\sum_{i=1}^n\sum_{j\neq i}^n\hat U_j'\hat\Omega^{-1}\hat g_i$$
$$=\frac{1}{n}\sum_{i=1}^n(\frac{1}{n}\sum_{j\neq i}^n\hat U_j'\hat\Omega^{-1})\hat g_i=\frac{1}{n}\sum_{i=1}^n\hat A_i g(z_i,\hat\beta)$$
This expression shows the jackknife interpretation of the CUE.

We see that the usual interpretation of a GMM estimator, where a linear combination of the moments is set equal to zero, is modified to allow a linear combination coefficient for each observation, that excludes the own observation from the Jacobian of the moments.

This does not effect the asymptotic distribution of the estimator, because $\hat g =o_p(1)$ means that each $\hat A_i$ will have the same limit as $n\to\infty$. It does, however, affect the small sample distribution of the estimator.

It is well known in the literature on finite sample properties of instrumental variables estimators that a non-zero expectation of the focs, evaluated at true parameters, leads to bias. The lack of centering of the focs will induce a lack of centering of the estimator. 

The usual two-step optimal GMM estimator suffers from this problem. Such an estimator is obtained from minimizing $\hat g(\beta)\hat\Omega(\tilde\beta)^{-1}\hat g(\beta)$, where $\tilde\beta$ is a preliminary estimator. This estimator has focs $\hat G'\hat\Omega(\tilde\beta)^{-1}\hat g=0$. Replacing $\hat\beta$ with $\beta_0$ and $\hat\Omega(\tilde \beta)$ by its true value $\Omega = E[g(z,\beta_0)g(z,\beta_0)']$, and taking expectations:
$$E[\frac{1}{n^2}\sum_{i=1}^ng_{\beta i}'\Omega^{-1}(\sum_{i=1}^n g_i)]=tr(B)/n\neq0$$
where $g_i=g(z_i,\beta_0)$, $g_{\beta i}=\partial g(z_i,\beta_0)/\partial\beta$, $B=\Omega^{-1}E[g_ig_{\beta i}']$ and where it is assumed that $Eg_ig_{\beta j'}=0$ for $i\neq j$.

By comparison, evaluating the CUE first-order conditions at $\beta_0$ and replacing $\hat\Omega$ by $\Omega$ and $\hat B$ by $B$, the corresponding expectation is:
$$E[\frac{1}{n}\sum_{i=1}^n(\frac{1}{n}\sum_{j\neq i}^n(g_{\beta j}-B'g_j)'\Omega^{-1})g_i]=0$$
where we also assume that $E[g_ig_j']=0$ for $i\neq j$. Thus, the focs for the CUE are centered at zero. In this way the CUE removes an important source of bias in GMM estimation.

The jackknife interpretation of the CUE is interesting, being an exact, small sample property. It arises from the the LS interpretation of $\hat B=\hat\Omega^{-1}\hat\Lambda$ that appears in the first-order conditions.

It is also possible to bypass the jackknife property and just use this form of $\hat B$ to show that the expected first-order conditions are centered. This alternative interpretation is useful because it extends to the autocorrelated moments case. Let:
